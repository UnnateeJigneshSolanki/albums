import { spawn } from 'child_process';
import http from 'http';

const PORT = 3008;

const routes = [
  '/',
  '/about-us',
  '/our-products',
  '/flush-mount-album',
  '/layflat',
  '/photo-book',
  '/luxury-albums',
  '/box-and-bags',
  '/slip-in-albums',
  '/image-editing',
  '/photography',
  '/album-designing',
  '/wedding-photo-albums',
  '/album-designs',
  '/contact-us',
  '/blogs',
  '/uk/box-and-bags-for-uk',
  '/uk/flush-mount-album-for-uk',
  '/uk/image-editing-for-uk',
  '/uk/luxury-albums-for-uk',
  '/uk/photo-book-for-uk',
  '/uk/photography-for-uk',
  '/uk/slip-in-albums-for-uk'
];

async function fetchRoute(path) {
  const url = `http://127.0.0.1:${PORT}${path}`;
  const res = await fetch(url);
  const text = await res.text();
  return { status: res.status, length: text.length };
}

async function waitForServer(retries = 15) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetchRoute('/');
      if (res.status === 200) return true;
    } catch (err) {
      if (i === 0 || i === retries - 1) console.log(`[Wait error ${i}]: ${err.message}`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  return false;
}

async function run() {
  console.log(`Starting Next.js server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-H', '127.0.0.1', '-p', String(PORT)], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  server.stdout.on('data', d => process.stdout.write(`[Server] ${d}`));
  server.stderr.on('data', d => process.stderr.write(`[Server Error] ${d}`));

  const ready = await waitForServer();
  if (!ready) {
    console.error('Server failed to start in time.');
    server.kill();
    process.exit(1);
  }

  console.log('\n--- Auditing All Routes ---');
  let errors = 0;
  for (const r of routes) {
    try {
      const res = await fetchRoute(r);
      if (res.status === 200) {
        console.log(`✓ ${r.padEnd(35)} [${res.status}] (${res.length} bytes)`);
      } else {
        console.error(`✗ ${r.padEnd(35)} [${res.status}]`);
        errors++;
      }
    } catch (e) {
      console.error(`✗ ${r.padEnd(35)} Failed: ${e.message}`);
      errors++;
    }
  }

  // Also test 404 handling
  try {
    const res404 = await fetchRoute('/non-existent-page-test');
    console.log(`✓ /non-existent-page-test (404)       [${res404.status}] (${res404.length} bytes)`);
  } catch (e) {
    console.error(`✗ 404 route test failed: ${e.message}`);
    errors++;
  }

  server.kill('SIGINT');
  console.log(`\nAudit finished with ${errors} error(s).`);
  process.exit(errors > 0 ? 1 : 0);
}

run();
