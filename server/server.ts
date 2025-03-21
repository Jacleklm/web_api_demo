// FILEPATH: /home/narwal/storage/github/web_api_demo/server/server.ts

import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    console.log(new Date().toISOString(), req.method, req.url);

    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, token');

    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const token = req.headers['token'];

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        console.log('Client sent:', body);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Welcome, ${token}!`);
    });
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default server;