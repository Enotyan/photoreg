from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

class MyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

PORT = 8000

with TCPServer(("", PORT), MyHandler) as httpd:
    print("Сервер запущен на порту", PORT)
    httpd.serve_forever()
