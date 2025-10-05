# Local Build Guide

## Issue: Build Getting Stuck

If your `npm run build` command gets stuck or hangs, follow these steps:

## ✅ Solution 1: Use the Fixed Build Command

The build script has been updated to remove the `--turbopack` flag which was causing hanging issues.

```bash
cd encode-life
npm run build
```

This should now work without hanging.

## 🔧 Solution 2: Clear Cache and Rebuild

If the build still hangs:

```bash
cd encode-life

# Remove build artifacts
rmdir /s /q .next

# Remove node_modules (if needed)
rmdir /s /q node_modules

# Reinstall dependencies
npm install

# Try building again
npm run build
```

## 🚀 Solution 3: Build Without Turbopack (Manual)

If you need to build manually without turbopack:

```bash
cd encode-life
npx next build
```

## 🐛 Solution 4: Check for Port Conflicts

Sometimes the build hangs due to port conflicts:

```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# If something is using it, kill the process or use a different port
set PORT=3001
npm run build
```

## 📊 Monitor Build Progress

To see what's happening during the build:

```bash
cd encode-life

# Build with verbose output
npm run build -- --debug
```

## ⚡ Quick Build Test

To quickly test if the build works:

```bash
cd encode-life

# Type check only (fast)
npx tsc --noEmit

# If that passes, try the full build
npm run build
```

## 🔍 Common Issues

### Issue: "Out of Memory"
```bash
# Increase Node.js memory limit
set NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

### Issue: "Module not found"
```bash
# Reinstall dependencies
npm install
npm run build
```

### Issue: "Port already in use"
```bash
# Kill all Node processes
taskkill /F /IM node.exe
npm run build
```

## ✅ Successful Build Output

A successful build should show:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /blog                                ...      ...
└ ○ /blog/[slug]                         ...      ...

○  (Static)  prerendered as static content
```

## 🎯 Expected Build Time

- **First build:** 30-60 seconds
- **Subsequent builds:** 20-40 seconds

If it takes longer than 2 minutes, something is wrong.

## 🛑 Force Stop a Hanging Build

If the build hangs:

**Windows (CMD):**
```bash
# Press Ctrl+C
# If that doesn't work:
taskkill /F /IM node.exe
```

**Windows (PowerShell):**
```powershell
# Press Ctrl+C
# If that doesn't work:
Get-Process node | Stop-Process -Force
```

## 📝 Build Script Changes

The `package.json` build script has been changed from:
```json
"build": "next build --turbopack"
```

To:
```json
"build": "next build"
```

This removes the turbopack flag which was causing issues.

## 🧪 Test the Build

After a successful build, test it locally:

```bash
cd encode-life

# Start the production server
npm run start

# Visit http://localhost:3000
```

## 🔄 Alternative: Use Development Mode

If you just want to test the app (not build for production):

```bash
cd encode-life
npm run dev
```

This will start the development server which is faster and doesn't require a full build.

## 📊 Build Performance Tips

1. **Close other applications** to free up memory
2. **Disable antivirus temporarily** (it can slow down file operations)
3. **Use SSD** if possible (faster file I/O)
4. **Increase Node.js memory** if you have large files

## ✅ Verification Checklist

- [ ] TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] Build completes without hanging
- [ ] Build output shows all routes
- [ ] Production server starts (`npm run start`)
- [ ] Website loads at http://localhost:3000

## 🎉 Success!

If the build completes successfully, you're ready to deploy to Vercel!

---

**Next Steps:**
1. Commit your changes
2. Push to GitHub
3. Vercel will automatically deploy
4. Check the deployment logs to confirm success
