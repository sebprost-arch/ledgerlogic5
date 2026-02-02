# Step-by-Step: Adding Resend API Key

## Quick Guide

### Step 1: Get Your API Key from Resend

1. Go to https://resend.com
2. Sign up for a free account
3. Click **API Keys** in the left sidebar
4. Click **Create API Key**
5. Give it a name like "LedgerLogic Production"
6. **Copy the key** - it looks like: `re_123abc456def...`

### Step 2: Create/Edit .env.local File

**Option A: If `.env.local` doesn't exist yet**

1. Open your project folder: `/Users/ameliedrouin/Accounting/ledger-logic-web`
2. Create a new file called `.env.local` (note the dot at the beginning)
3. Add this line:
   ```bash
   RESEND_API_KEY=re_your_actual_key_here
   ```
4. Replace `re_your_actual_key_here` with the key you copied from Resend
5. Save the file

**Option B: If `.env.local` already exists**

1. Open the existing `.env.local` file in your project root
2. Add a new line:
   ```bash
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Save the file

### Step 3: Restart Development Server

Stop the current server (Ctrl+C) and start it again:

```bash
npm run dev
```

## Example .env.local File

Your complete `.env.local` file might look like:

```bash
# Resend Email API
RESEND_API_KEY=re_AbCd1234EfGh5678IjKl9012MnOp

# Any other environment variables you have
# NEXT_PUBLIC_GOOGLE_ANALYTICS=...
```

## Important Notes

- ⚠️ **Never commit this file to Git** - it's already in `.gitignore`
- ⚠️ **Keep the key secret** - don't share it publicly
- ✅ The key only works on your server, not in the browser
- ✅ Must restart the dev server after adding/changing

## Troubleshooting

If emails aren't working after setup:

1. Check that the key is in `.env.local` (not `.env`)
2. Make sure there are no spaces around the `=` sign
3. Verify you restarted the dev server
4. Check the terminal for error messages
5. Look in Resend dashboard → Logs for email attempts

## Verification

To verify it's working:
1. Fill out the questionnaire on your site
2. Submit the form
3. Check your terminal for any errors
4. Check `seb@ledgerlogic.ca` for the email
5. Check Resend dashboard → Logs to see if the email was sent
