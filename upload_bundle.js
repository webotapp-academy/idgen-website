const fs = require('fs');
const path = require('path');
const { Client } = require('ssh2');

const conn = new Client();
const LOCAL_TAR = path.join(__dirname, 'bundle.tar.gz');
const REMOTE_TAR = '/home/u942704794/bundle.tar.gz';
const REMOTE_PUBLIC_HTML = '/home/u942704794/domains/idgen.in/public_html';

if (!fs.existsSync(LOCAL_TAR)) {
  console.error('bundle.tar.gz does not exist!');
  process.exit(1);
}

const totalBytes = fs.statSync(LOCAL_TAR).size;
console.log(`Starting upload of bundle.tar.gz (${(totalBytes / (1024 * 1024)).toFixed(2)} MB)...`);

conn.on('ready', () => {
  console.log('SSH connection established.');
  conn.sftp((err, sftp) => {
    if (err) {
      console.error('SFTP initialization failed:', err);
      conn.end();
      return;
    }

    let lastLogged = 0;
    const startTime = Date.now();

    sftp.fastPut(
      LOCAL_TAR,
      REMOTE_TAR,
      {
        chunkSize: 65536,
        concurrency: 64,
        step: (transferred, chunk, total) => {
          const now = Date.now();
          if (now - lastLogged > 2000 || transferred === total) {
            lastLogged = now;
            const pct = ((transferred / total) * 100).toFixed(1);
            const mb = (transferred / (1024 * 1024)).toFixed(1);
            const totalMb = (total / (1024 * 1024)).toFixed(1);
            const speed = ((transferred / (1024 * 1024)) / ((now - startTime) / 1000)).toFixed(2);
            console.log(`Upload progress: ${pct}% (${mb}/${totalMb} MB) @ ${speed} MB/s`);
          }
        }
      },
      (uploadErr) => {
        if (uploadErr) {
          console.error('Upload failed:', uploadErr);
          conn.end();
          return;
        }

        console.log('✓ bundle.tar.gz successfully uploaded to server!');
        console.log('Extracting bundle into ' + REMOTE_PUBLIC_HTML + '...');

        const extractCmd = `
          mkdir -p ${REMOTE_PUBLIC_HTML}
          cd ${REMOTE_PUBLIC_HTML}
          tar -xzf ${REMOTE_TAR}
          rm -f ${REMOTE_TAR}
          echo "=== Extraction Completed ==="
          ls -la ${REMOTE_PUBLIC_HTML} | head -n 25
          echo "=== Check HTTP response ==="
          curl -k -s -I https://idgen.in/ | head -n 15
        `;

        conn.exec(extractCmd, (execErr, stream) => {
          if (execErr) {
            console.error('Extraction exec error:', execErr);
            conn.end();
            return;
          }
          stream.on('close', (code) => {
            console.log(`Extract command finished with code ${code}`);
            conn.end();
          }).on('data', (d) => {
            process.stdout.write(d);
          }).stderr.on('data', (d) => {
            process.stderr.write(d);
          });
        });
      }
    );
  });
}).on('error', (err) => {
  console.error('SSH connection error:', err);
}).connect({
  host: '147.93.109.23',
  port: 65002,
  username: 'u942704794',
  password: 'IDgen789@#$',
  readyTimeout: 45000,
});
