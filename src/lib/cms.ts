import { GraphClient } from '@optimizely/cms-sdk';

const TOKEN_EXPIRY_BUFFER_MS = 60_000; // refresh 60s before expiry

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt - TOKEN_EXPIRY_BUFFER_MS) {
    return cachedToken;
  }

  const res = await fetch('https://api.cms.optimizely.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: import.meta.env.OPTIMIZELY_GRAPH_APP_KEY,
      client_secret: import.meta.env.OPTIMIZELY_GRAPH_SECRET,
    }),
  });

  if (!res.ok) throw new Error(`Failed to fetch token: ${res.statusText}`);

  const { access_token, expires_in } = await res.json();
  cachedToken = access_token;
  tokenExpiresAt = Date.now() + expires_in * 1000;

  return access_token;
}

export async function createCmsClient() {
  const token = await getAccessToken();

  return new GraphClient(token, {
    graphUrl: import.meta.env.OPTIMIZELY_GRAPH_URL,
  });
}

export const cmsClient = new GraphClient(import.meta.env.OPTIMIZELY_GRAPH_SINGLE_KEY, {
  graphUrl: import.meta.env.OPTIMIZELY_GRAPH_GATEWAY,
});