import { GraphClient } from '@optimizely/cms-sdk';

export const cmsClient = new GraphClient(import.meta.env.OPTIMIZELY_GRAPH_SINGLE_KEY, {
  graphUrl: `${import.meta.env.OPTIMIZELY_GRAPH_GATEWAY}/content/v2`,
});

export async function cmsPreviewRequest(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch('https://api.cms.optimizely.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: import.meta.env.OPTIMIZELY_CLIENT_ID,
      client_secret: import.meta.env.OPTIMIZELY_CLIENT_SECRET,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to fetch token: ${res.status} ${res.statusText} — ${body}`);
  }

  const { access_token } = await res.json();
  return cmsClient.request(query, variables, access_token);
}
