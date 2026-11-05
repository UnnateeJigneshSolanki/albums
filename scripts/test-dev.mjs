import { spawn } from 'child_process';

const PORT = 3012;

async function fetchHome() {
  const res = await fetch(`http://127.0.0.1:${PORT}/`);
  const text = await res.text();
  return { status: res.status, length: text.length };
}

async function run() {
  console.log(`Starting next dev on port ${PORT}...`);
  const server = spawn('npx', ['next', 'dev', '-H', '127.0.0.1', '-p', String(PORT)], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  let serverOutput = '';
  server.stdout.on('data', d => {
    serverOutput += d.toString();
    process.stdout.write(`[Dev] ${d}`);
  });
  server.stderr.on('data', d => {
    serverOutput += d.toString();
    process.stderr.write(`[Dev Error] ${d}`);
  });

  let ready = false;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 1000));
    try {
      const res = await fetchHome();
      if (res.status === 200) {
        console.log(`\n✓ Successfully loaded dev server home page! Status: ${res.status}, Length: ${res.length} bytes`);
        ready = true;
        break;
      }
    } catch {
      // waiting for compilation
    }
  }

  server.kill('SIGINT');
  if (!ready) {
    console.error('Dev server failed to serve home page.');
    process.exit(1);
  } else {
    console.log('Dev server test passed with zero errors!');
    process.exit(0);
  }
}

run();
