/**
 * IndexNow API Submission Script
 * Submits updated URLs to search engines (Bing, Yandex, IndexNow endpoint)
 * Usage: node scripts/indexnow.mjs
 */

const HOST = 'sashibitcode.vercel.app';
const KEY = 'e9a4f6d81b3c482094c34a21f7b88902';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`,
  `https://${HOST}/sitemap.xml`,
];

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

async function submitIndexNow() {
  console.log(`[IndexNow] Starting URL submission for host: ${HOST}`);
  console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`);
  console.log(`[IndexNow] Target URLs:`, URL_LIST);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`\n[IndexNow] Submitting to endpoint: ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`[IndexNow] Success (${response.status}) at ${endpoint}! URLs queued for indexing.`);
      } else {
        const text = await response.text();
        console.warn(`[IndexNow] Response (${response.status}) from ${endpoint}: ${text || response.statusText}`);
      }
    } catch (err) {
      console.error(`[IndexNow] Failed to submit to ${endpoint}:`, err.message);
    }
  }

  console.log('\n[IndexNow] Submission process complete.');
}

submitIndexNow();
