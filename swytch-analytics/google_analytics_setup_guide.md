# Google Analytics Integration: Permissions & Setup Guide

To ensure the backend can fully interact with Google Analytics to both read reporting data and automatically provision new GA4 properties for users, you need specific permissions and APIs enabled in your Google Cloud Console.

## 1. Required Google Cloud APIs

You must explicitly enable these library APIs in the Google Cloud Console for your project:
- **Google Analytics Admin API**: Required to fetch a user's existing accounts, properties, and to programmatically create new GA4 properties and data streams.
- **Google Analytics Data API**: Required to query and fetch the actual reporting metric data (page views, sessions, events, timeseries) for the dashboard.
- **Firebase Management API & Identity Toolkit**: Required if you are utilizing Firebase strictly for the initial login flow.

## 2. OAuth Consent Screen Configuration

When setting up your OAuth Consent Screen, you must include and justify the following strict OAuth scopes:
- \`https://www.googleapis.com/auth/analytics.readonly\`: Allows the app to download analytics data, view properties, and read the dashboard metrics.
- \`https://www.googleapis.com/auth/analytics.edit\`: Required **only** for users who need the app to automatically create a new GA4 property and Web Data Stream on their behalf.

*Note: Because \`analytics.edit\` is a restricted scope, releasing this app out of "Testing" status into "Production" on Google Cloud will require a verification process and potentially a security assessment if you exceed quota limits.*

## 3. Required Environment Variables (.env)

Your backend needs the following environment keys to run the OAuth flow and fetch reports:

\`\`\`env
# Google OAuth 2.0 Client credentials (Found under Credentials)
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"

# Used by the frontend/backend to route Google's callback redirects properly
FRONTEND_URL="http://localhost:3000" # Use your domain in production
\`\`\`

## 4. Required OAuth Redirect URIs

In the Google Cloud Console -> Credentials -> OAuth 2.0 Client IDs, you must whitelist the exact callback URIs your app will use. For this application, you must add:

- **Local Development**: \`http://localhost:3000/api/ga/oauth/callback\`
- **Production**: \`https://your-production-domain.com/api/ga/oauth/callback\`

## 5. Potential Pitfalls: Root Analytics Accounts
Google strictly prevents third-party API apps from creating the overarching "Root User Account" for Google Analytics. 
If a user has **never** used Google Analytics before, they cannot create a property through our tool until they have visited \`analytics.google.com\` and accepted Google's global Terms of Service to establish their root account. The UI handles this edge case by prompting them to do so first.
