# Environment Setup for Resend Email Notifications

## Required Environment Variable

Add this to your `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

## Setup Steps

### 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the key (it will only be shown once!)

### 2. Add API Key to Your Project

Create or edit `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_actual_key_here
```

### 3. Update Email Recipients

Edit `/app/api/send-questionnaire/route.ts` line 24:

```typescript
to: ['your-email@ledgerlogic.com'], // Replace with your actual email
```

### 4. Domain Verification (Optional but Recommended)

For production, verify your domain in Resend:

1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `ledgerlogic.com`)
3. Add the DNS records they provide
4. Update line 23 in the API route:

```typescript
from: 'Questionnaire <noreply@ledgerlogic.com>',
```

### 5. Restart Development Server

After adding the environment variable:

```bash
npm run dev
```

## Testing

1. Fill out the questionnaire on your site
2. Check your email for the notification
3. Check Resend dashboard for email logs

## Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**

Perfect for collecting questionnaire responses!
