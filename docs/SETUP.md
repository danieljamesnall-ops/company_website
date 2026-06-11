# Intel Global — Setup & Run Guide (Any Device)

Complete guide to install, configure, and run this app on **macOS**, **Windows**, **Linux**, or any machine with Node.js.

---

## What you need

| Software | Version | Required |
|----------|---------|----------|
| Node.js | 18.18+ or 20+ (LTS recommended) | Yes |
| npm | 9+ (included with Node.js) | Yes |
| Git | Latest | Only if cloning from a repo |
| Code editor | Cursor, VS Code, etc. | Optional |
| Resend account | — | Optional (contact form emails) |

**Disk space:** ~500 MB after `npm install`

**RAM:** 4 GB minimum, 8 GB recommended

---

## Step 1 — Install Node.js

### macOS

**Option A — Installer (easiest)**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version
3. Run the `.pkg` installer
4. Restart Terminal

**Option B — Homebrew**

```bash
brew install node
```

### Windows

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** Windows Installer (`.msi`)
3. Run the installer — keep default options (includes npm)
4. Restart Command Prompt or PowerShell

**Optional — Windows via winget**

```powershell
winget install OpenJS.NodeJS.LTS
```

### Linux (Ubuntu / Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Linux (Fedora)

```bash
sudo dnf install nodejs npm
```

### Verify Node.js is installed

Open a terminal (or PowerShell on Windows) and run:

```bash
node -v
npm -v
```

Expected output example:

```
v20.11.0
10.2.4
```

If you see `command not found`, Node.js is not installed or not in your PATH. Reinstall and restart your terminal.

---

## Step 2 — Get the project

### Option A — You already have the folder

**macOS / Linux**

```bash
cd /path/to/intelglobal
```

**Windows (Command Prompt)**

```cmd
cd C:\Users\YourName\Documents\intelglobal
```

**Windows (PowerShell)**

```powershell
cd C:\Users\YourName\Documents\intelglobal
```

### Option B — Clone from Git

```bash
git clone <your-repo-url>
cd intelglobal
```

### Option C — Copy from USB / cloud

1. Copy the entire `intelglobal` folder to your device
2. Open a terminal in that folder

---

## Step 3 — Install dependencies

Run this **once** in the project folder:

```bash
npm install
```

This downloads all packages into `node_modules/`. It may take 1–3 minutes depending on your internet speed.

**Success check:** You should see a `node_modules` folder and no errors.

> If you see `next: command not found` later, you skipped this step. Run `npm install` first.

---

## Step 4 — Environment variables (optional)

Create a local env file from the template:

**macOS / Linux**

```bash
cp .env.example .env.local
```

**Windows (PowerShell)**

```powershell
Copy-Item .env.example .env.local
```

**Windows (Command Prompt)**

```cmd
copy .env.example .env.local
```

Edit `.env.local` with any text editor:

```env
# Local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional — for contact form emails (sign up at resend.com)
RESEND_API_KEY=re_your_key_here
EMAIL_FROM=Intel Global <noreply@yourdomain.com>
NOTIFICATION_EMAIL=contact@intelglobal.net
```

| Variable | When needed |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production deploy |
| `RESEND_API_KEY` | Sending contact form emails |
| `EMAIL_FROM` | Sending contact form emails |
| `NOTIFICATION_EMAIL` | Where inquiries are delivered |

The app runs fine **without** Resend for local preview. Only the email send step needs it.

---

## Step 5 — Run the app

### Development mode (daily use)

```bash
npm run dev
```

Wait until you see:

```
✓ Ready
- Local:   http://localhost:3000
```

Open in your browser:

**http://localhost:3000**

### Production mode (test before deploy)

```bash
npm run build
npm start
```

Then open **http://localhost:3000**

### Stop the server

Press `Ctrl + C` in the terminal.

---

## Step 6 — View on phone or tablet (same Wi‑Fi)

While `npm run dev` is running, the terminal shows a **Network** URL, for example:

```
- Network: http://192.168.1.15:3000
```

On your phone/tablet (connected to the **same Wi‑Fi**), open that Network URL in the browser.

> If it does not load, your firewall may be blocking port 3000. Allow Node.js through the firewall or use localhost on the dev machine only.

---

## All commands

| Command | What it does |
|---------|----------------|
| `npm install` | Install dependencies (first time / after pull) |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code style |

### Custom port

```bash
npm run dev -- -p 3001
```

Opens at **http://localhost:3001**

---

## Pages to test

| URL | Page |
|-----|------|
| http://localhost:3000 | Home |
| http://localhost:3000/services | Services |
| http://localhost:3000/about | About |
| http://localhost:3000/why-us | Why Us |
| http://localhost:3000/contact | Contact form |
| http://localhost:3000/privacy | Privacy |
| http://localhost:3000/terms | Terms |

---

## Customize company info

Before going live, edit:

**`src/lib/data/site.ts`**

- Company name, phone, address, emails, social links

**`src/lib/data/services.ts`**

- Service titles and descriptions

---

## Troubleshooting

### `next: command not found` or `sh: next: command not found`

Dependencies are not installed.

```bash
npm install
npm run dev
```

### Port 3000 already in use

**macOS / Linux**

```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Windows (PowerShell)**

```powershell
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
npm run dev
```

Or use another port:

```bash
npm run dev -- -p 3001
```

### `npm install` fails

1. Check Node version: `node -v` (must be 18.18+)
2. Clear and reinstall:

**macOS / Linux**

```bash
rm -rf node_modules package-lock.json .next
npm install
```

**Windows (PowerShell)**

```powershell
Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
```

### Build errors after git pull

```bash
rm -rf node_modules .next
npm install
npm run build
```

(Use PowerShell `Remove-Item` equivalents on Windows — see above.)

### Contact form shows error on submit

1. Add `RESEND_API_KEY` to `.env.local`
2. Verify your domain in [Resend](https://resend.com)
3. Restart dev server (`Ctrl + C`, then `npm run dev`)

### Blank page or broken styles

Hard refresh:

- **Mac:** `Cmd + Shift + R`
- **Windows / Linux:** `Ctrl + Shift + R`

Or clear Next.js cache:

```bash
rm -rf .next
npm run dev
```

---

## Deploy to production

### Vercel (recommended)

1. Push code to GitHub
2. Sign in at [vercel.com](https://vercel.com)
3. Import the repository
4. Add env vars from `.env.example`
5. Set `NEXT_PUBLIC_SITE_URL` to your live domain
6. Deploy

### Any Node.js server

```bash
npm run build
npm start
```

Set environment variables on the host. Default port is **3000** (configure via `PORT` env var on most platforms).

---

## Quick reference (copy & paste)

```bash
# 1. Go to project
cd /path/to/intelglobal

# 2. Install (first time only)
npm install

# 3. Env file (optional)
cp .env.example .env.local

# 4. Run
npm run dev
```

Open **http://localhost:3000**

---

## Need help?

- Full project overview: [README.md](../README.md)
- Node.js docs: [nodejs.org/docs](https://nodejs.org/docs/latest/api/)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
