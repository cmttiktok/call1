const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const path = require('path');
const server = require('http').Server(app);

// Cấu hình PeerServer chạy trên đường dẫn /peerjs
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/'
});

app.use('/peerjs', peerServer);

// Phục vụ file giao diện
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Chạy trên port 3001 theo cấu hình Oracle của bạn
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Hệ thống Zalo Call đang chạy tại: http://152.69.214.78:${PORT}`);
});
