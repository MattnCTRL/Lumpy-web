#!/usr/bin/env python3
import json, hashlib, os, sys, urllib.request, urllib.error

MACVC = "/home/lumpy/macs/100-125-22-103/Library/Application Support/com.vercel.cli"
SRC   = "/home/lumpy/projects/_conductor/.lumpy/marketing/lumpy"
PROJECT = "lumpy"
DOMAIN  = "lumpy.nublear.com"
FILES   = ["index.html", "vercel.json"]

token = json.load(open(os.path.join(MACVC, "auth.json")))["token"]
team  = json.load(open(os.path.join(MACVC, "config.json"))).get("currentTeam", "")
TEAMQ = f"?teamId={team}" if team else ""

def api(method, url, data=None, ctype="application/json", raw=False):
    req = urllib.request.Request(url, method=method)
    req.add_header("Authorization", f"Bearer {token}")
    if data is not None:
        req.add_header("Content-Type", ctype)
        body = data if raw else json.dumps(data).encode()
    else:
        body = None
    try:
        with urllib.request.urlopen(req, body, timeout=60) as r:
            return r.status, json.loads(r.read().decode() or "{}")
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode() or "{}")

# 1) upload files
manifest = []
for rel in FILES:
    b = open(os.path.join(SRC, rel), "rb").read()
    sha = hashlib.sha1(b).hexdigest()
    url = f"https://api.vercel.com/v2/files{('?teamId='+team) if team else ''}"
    req = urllib.request.Request(url, data=b, method="POST")
    req.add_header("Authorization", f"Bearer {token}")
    req.add_header("Content-Type", "application/octet-stream")
    req.add_header("x-vercel-digest", sha)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            print(f"upload {rel}: {r.status}")
    except urllib.error.HTTPError as e:
        print(f"upload {rel}: ERR {e.code} {e.read().decode()[:300]}"); sys.exit(1)
    manifest.append({"file": rel, "sha": sha, "size": len(b)})

# 2) create production deployment (auto-creates project "lumpy")
dep = {
    "name": PROJECT,
    "target": "production",
    "files": manifest,
    "projectSettings": {"framework": None},
}
st, res = api("POST", f"https://api.vercel.com/v13/deployments{TEAMQ}&forceNew=1" if team
              else "https://api.vercel.com/v13/deployments?forceNew=1", dep)
print("deploy status:", st)
if st >= 400:
    print(json.dumps(res, indent=2)[:1200]); sys.exit(1)
url = res.get("url"); print("deployment url:", url, "| state:", res.get("readyState"))

# 3) attach custom domain to the project
st2, res2 = api("POST", f"https://api.vercel.com/v10/projects/{PROJECT}/domains{TEAMQ}",
                {"name": DOMAIN})
print("domain add status:", st2)
print(json.dumps({k: res2.get(k) for k in ("name","verified","verification","error")}, indent=2))
print("\nLIVE (vercel url): https://%s" % url)
print("TARGET domain: https://%s" % DOMAIN)
