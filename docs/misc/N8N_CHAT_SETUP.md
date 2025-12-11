# N8N Chat Widget Setup Guide

## Overview
The n8n chat widget has been integrated into your website and will appear on all pages. This guide explains how to configure it with your n8n webhook.

## Setup Instructions

### 1. Create Environment Variable
Create a `.env.local` file in your project root (if it doesn't exist) and add:

```bash
NEXT_PUBLIC_N8N_WEBHOOK_URL=http://localhost:5678/webhook/3a749640-fba1-4a77-ba4e-e27440f0ef06/chat
```

**Quick Setup Command:**
```bash
echo "NEXT_PUBLIC_N8N_WEBHOOK_URL=http://localhost:5678/webhook/3a749640-fba1-4a77-ba4e-e27440f0ef06/chat" > .env.local
```

### 2. Example Configuration
```bash
# Example webhook URL format:
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id

# Or for n8n Cloud:
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://app.n8n.cloud/webhook/your-webhook-id
```

### 3. N8N Workflow Setup
In your n8n instance, you'll need to:

1. Create a new workflow
2. Add a "Webhook" trigger node
3. Configure the webhook to receive chat messages
4. Add processing nodes to handle the messages (e.g., send to your team, save to database, etc.)
5. Copy the webhook URL and add it to your environment variable

### 4. Testing
1. Start your development server: `npm run dev`
2. Visit your website
3. Look for the chat widget (usually appears in the bottom-right corner)
4. Test sending a message to ensure it reaches your n8n workflow

## Features
- ✅ Chat widget appears on all pages
- ✅ **Custom branded styling** matching A Very Serious Company's design
- ✅ **Brand colors** (#0B3D91 blue theme)
- ✅ **Custom fonts** (Geist Sans family)
- ✅ **No n8n branding** - completely white-labeled
- ✅ Responsive design
- ✅ Configurable via environment variables
- ✅ Graceful fallback if webhook URL is not configured
- ✅ Uses the existing `@n8n/chat` dependency

## Troubleshooting
- If the chat widget doesn't appear, check the browser console for error messages
- Ensure your webhook URL is correct and accessible
- Verify that your n8n workflow is active and receiving webhook calls
- Check that the `NEXT_PUBLIC_N8N_WEBHOOK_URL` environment variable is set correctly

## Files Modified
- `src/components/ChatWidget.tsx` - Custom branded chat widget component
- `src/app/chat-widget.css` - Custom styling to match brand colors and fonts
- `src/app/layout.tsx` - Integrated chat widget into main layout
- `package.json` - Already includes `@n8n/chat` dependency

## Branding Details
The chat widget has been completely customized to match A Very Serious Company's branding:

- **Primary Color**: #0B3D91 (brand blue)
- **Fonts**: Geist Sans family (matching website)
- **Design**: Rounded corners, subtle shadows, modern aesthetic
- **No n8n branding**: Completely white-labeled
- **Responsive**: Works on all device sizes
- **Interactive**: Hover effects and smooth transitions
