# Setup — Vercel + Cloudflare

Connect this repository to Vercel and expose it on `frameworks.moretes.com`.

## 1. Vercel project

https://vercel.com → **Add New… → Project** → import
`fernandofatech/architect-frameworks-hub`. Framework: Next.js. Root directory:
`frontend`. Click **Deploy**.

## 2. IDs and token

In **Settings → General**: copy `Project ID` (`VERCEL_PROJECT_ID`) and team
ID (`VERCEL_ORG_ID`). Create a token at https://vercel.com/account/tokens
(`VERCEL_TOKEN`).

## 3. GitHub Actions secrets

```bash
gh secret set VERCEL_TOKEN      --body "<token>"
gh secret set VERCEL_ORG_ID     --body "<org-id>"
gh secret set VERCEL_PROJECT_ID --body "<project-id>"
```

## 4. Custom subdomain

Vercel: **Settings → Domains → Add** → `frameworks.moretes.com`.

## 5. Cloudflare DNS

Add CNAME `frameworks` → `cname.vercel-dns.com`, **DNS only** (gray cloud).

## 6. Verify

```bash
curl -I https://frameworks.moretes.com
```
