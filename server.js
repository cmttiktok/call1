const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const { ExpressPeerServer } = require('peer');

// Cấu hình PeerServer chạy song song với ứng dụng web
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/myapp',
    proxied: true
});

// Đường dẫn kết nối PeerJS: http://152.69.214.78:3001/peerjs
app.use('/peerjs', peerServer);

// Hiển thị giao diện web từ file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Cài đặt Port 3001 cho Oracle
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`🚀 Hệ thống Zalo Call đang chạy tại: http://152.69.214.78:${PORT}`);
});
