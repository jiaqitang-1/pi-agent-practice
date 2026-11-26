'use strict';

// Temporary build-only network settings. Project source and package files stay untouched.
const entry = (process.argv[1] || '').replaceAll('\\', '/');
if (entry.endsWith('/packages/ai/scripts/generate-models.ts') ||
    entry.endsWith('/qa/probe-pi-build-network.cjs')) {
  const { fetch, ProxyAgent, RetryAgent } = require('D:/workspace/pi-hunnu-2026/node_modules/undici');
  const proxy = new ProxyAgent({
    uri: process.env.PI_BUILD_PROXY || 'http://127.0.0.1:7897',
    connectTimeout: 60000,
    headersTimeout: 60000,
    bodyTimeout: 60000,
  });
  const dispatcher = new RetryAgent(proxy, {
    maxRetries: 2,
    minTimeout: 1000,
    maxTimeout: 3000,
    methods: ['GET', 'HEAD'],
    errorCodes: ['ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND', 'EAI_AGAIN',
      'UND_ERR_CONNECT_TIMEOUT', 'UND_ERR_SOCKET', 'UND_ERR_HEADERS_TIMEOUT'],
    statusCodes: [429, 500, 502, 503, 504],
  });
  globalThis.fetch = (input, options = {}) => fetch(input, { ...options, dispatcher });
  console.log('[build-network] Explicit proxy enabled; connect timeout 60s; GET/HEAD retries up to 2.');
}
