#!/usr/bin/env python3
"""
Local TTS relay for Library of Whys.
Uses macOS 'say' command. Blocks until speech finishes so the browser
knows exactly when to call onEnd().
Also provides /log (POST) and /questions (GET) for the parent view.
Runs on http://localhost:8081
"""
from http.server import BaseHTTPRequestHandler
from socketserver import ThreadingMixIn, TCPServer
import subprocess, json, threading, os
from datetime import datetime

LOG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        'Library of Whys', 'questions_log.json')

CORS = {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

current_proc = None
proc_lock    = threading.Lock()
log_lock     = threading.Lock()


def _load_log():
    if os.path.exists(LOG_FILE):
        try:
            with open(LOG_FILE, 'r') as f:
                return json.load(f)
        except Exception:
            pass
    return []


def _append_log(entry):
    with log_lock:
        log = _load_log()
        log.append(entry)
        os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
        with open(LOG_FILE, 'w') as f:
            json.dump(log, f, indent=2)


class TTSHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        for k, v in CORS.items():
            self.send_header(k, v)
        self.end_headers()

    def do_GET(self):
        path = self.path.rstrip('/').split('?')[0]
        if path == '/questions':
            data = json.dumps(_load_log()).encode()
            self.send_response(200)
            for k, v in CORS.items():
                self.send_header(k, v)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        global current_proc
        path   = self.path.rstrip('/')
        length = int(self.headers.get('Content-Length', 0))
        body   = self.rfile.read(length)

        if path == '/cancel':
            with proc_lock:
                if current_proc and current_proc.poll() is None:
                    current_proc.kill()
            self._ok()
            return

        if path == '/log':
            try:
                data = json.loads(body)
                _append_log({
                    'timestamp':    datetime.now().isoformat(),
                    'question':     str(data.get('question', '')).strip(),
                    'answer':       str(data.get('answer', '')).strip(),
                    'activity':     str(data.get('activity', '')).strip(),
                    'imageKeyword': str(data.get('imageKeyword', '')).strip(),
                })
            except Exception:
                pass
            self._ok()
            return

        # /speak (default)
        try:
            text = str(json.loads(body).get('text', '')).strip()
        except Exception:
            text = ''

        if text:
            with proc_lock:
                if current_proc and current_proc.poll() is None:
                    current_proc.kill()
                current_proc = subprocess.Popen(['say', '-r', '165', text])
            current_proc.wait()

        self._ok()

    def _ok(self):
        self.send_response(200)
        for k, v in CORS.items():
            self.send_header(k, v)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"ok":true}')

    def log_message(self, *args):
        pass


class ThreadedTCPServer(ThreadingMixIn, TCPServer):
    allow_reuse_address = True
    daemon_threads      = True


if __name__ == '__main__':
    port = 8081
    print(f'TTS server → http://localhost:{port}')
    server = ThreadedTCPServer(('localhost', port), TTSHandler)
    server.serve_forever()
