# Environment Variables Setup for Vercel

## Required Environment Variables

You need to add these environment variables in your Vercel dashboard:

### 1. MongoDB Database Connection
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://username:password@cluster.mongodb.net/database_name`
- **Example**: `mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/lms_database`

### 2. Clerk Webhook Secret (if using Clerk authentication)
- **Key**: `CLERK_WEBHOOK_SECRET`
- **Value**: Your Clerk webhook secret from Clerk dashboard

## How to Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on **Settings** tab
3. Click on **Environment Variables** in the left sidebar
4. Click **Add Another** button
5. Enter the Key and Value for each variable
6. Select the environments (Production, Preview, Development)
7. Click **Save**
8. **Redeploy** your project

## Testing Without Database

If you don't have a MongoDB database yet, you can test the API without it:
- Visit: `https://your-app.vercel.app/api/` (will work without database)
- Visit: `https://your-app.vercel.app/` (will show "API Not Working" without database)

## Getting MongoDB URI

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace `<username>`, `<password>`, and `<dbname>` with your actual values
