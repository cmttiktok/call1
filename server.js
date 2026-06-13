const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { ExpressPeerServer } = require('peer');

// Tích hợp máy chủ tín hiệu PeerServer trực tiếp vào chung Port với Web
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/'
});

app.use('/myapp', peerServer);

// Cho phép truy cập trực tiếp file index.html ở thư mục gốc
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Cấu hình Port linh hoạt (Nếu chạy trên Render/Oracle Cloud)
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server đang chạy ổn định trên port: ${PORT}`);
});
