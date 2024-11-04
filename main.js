import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let svelteServerProcess;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,

    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Load the URL after confirming the server is up
  waitForServer('http://localhost:3000', 5000) // Wait up to 5 seconds
    .then(() => mainWindow.loadURL('http://localhost:3000'))
    .catch((err) => {
      console.error('Failed to load the server:', err);
      app.quit();
    });
}

function waitForServer(url, timeout) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    (function checkServer() {
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve(true);
        } else if (Date.now() - start > timeout) {
          reject(new Error('Server timed out'));
        } else {
          setTimeout(checkServer, 100); // Retry after 100ms
        }
      }).on('error', () => {
        if (Date.now() - start > timeout) {
          reject(new Error('Server timed out'));
        } else {
          setTimeout(checkServer, 100);
        }
      });
    })();
  });
}

// Start SvelteKit server in production
function startSvelteKitServer() {
  svelteServerProcess = spawn('node', ['build/index.js'], {
    stdio: 'inherit',
    env: { ...process.env, PORT: 3000 },
  });
}

app.on('ready', () => {
  if (process.env.NODE_ENV !== 'development') {
    startSvelteKitServer();
  }
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('quit', () => {
  if (svelteServerProcess) svelteServerProcess.kill();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
















































































