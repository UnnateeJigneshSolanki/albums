import { spawn, execSync } from 'child_process';
import fs from 'fs';

const PORT = 3008;

async function run() {
  console.log(`Starting next start on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-H', '127.0.0.1', '-p', String(PORT)], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  for (let i = 0; i < 15; i++) {
    await new Promise(r => setTimeout(r, 1000));
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`);
      if (res.status === 200) {
        console.log('Server ready! Capturing screenshot with Edge...');
        break;
      }
    } catch {
      // wait
    }
  }

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outPath = 'C:\\Users\\UNNATEE\\.gemini\\antigravity\\brain\\faf49db4-b084-4de8-a12e-3cf5ddef1047\\home-rendered.png';

  try {
    execSync(`"${edgePath}" --headless --disable-gpu --hide-scrollbars --window-size=1366,4500 --screenshot="${outPath}" http://127.0.0.1:${PORT}/`);
    console.log('Screenshot captured successfully to:', outPath);
    if (fs.existsSync(outPath)) {
      console.log('File size:', fs.statSync(outPath).size, 'bytes');
    }
  } catch (err) {
    console.error('Edge screenshot error:', err.message);
  }

  server.kill('SIGINT');
  process.exit(0);
}

run();
