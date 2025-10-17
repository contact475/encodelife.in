# 🔧 Fix 403 Error - 2 Minute Solution

## ❌ Current Error:
```
statusCode: 403
message: 'You can only send testing emails to your own email address (contact@encodelife.in)'
```

---

## ✅ THE FIX (30 seconds):

### Open `.env.local` and change this line:

**BEFORE (❌ Not Working):**
```env
CONTACT_EMAIL=heyadrsh@gmail.com
```

**AFTER (✅ Working):**
```env
CONTACT_EMAIL=contact@encodelife.in
```

### Then restart:
```bash
npm run dev
```

### Test:
1. Fill out contact form
2. Click "Send message"
3. Check `contact@encodelife.in` inbox
4. ✅ Email received!

---

## 🤔 Why?

Resend's testing mode only sends to the email you signed up with: `contact@encodelife.in`

To send to other emails like `heyadrsh@gmail.com`, you need to verify your domain.

---

## 🚀 Want to Send to Any Email?

### Verify Your Domain (10 minutes):

1. **Go to:** [resend.com/domains](https://resend.com/domains)

2. **Add domain:** `encodelife.in`

3. **Add DNS records** (Resend will show you exactly what to add)

4. **Wait 5-10 minutes** for verification

5. **Update code:**
   ```typescript
   // In app/api/send-email/route.ts
   from: 'Encode Life Contact <contact@encodelife.in>',
   ```

6. **Now use any email:**
   ```env
   CONTACT_EMAIL=heyadrsh@gmail.com  # ✅ Works!
   ```

---

## 📊 Comparison:

| Method | Setup Time | Can Send To | Status |
|--------|-----------|-------------|--------|
| Use Resend email | 30 seconds | `contact@encodelife.in` only | ✅ Works now |
| Verify domain | 10 minutes | Any email address | ✅ Production ready |

---

## 🎯 Recommendation:

**For testing now:** Use `contact@encodelife.in`
**For production:** Verify domain `encodelife.in`

---

**Quick fix: Change `CONTACT_EMAIL` to `contact@encodelife.in` in `.env.local`!**
