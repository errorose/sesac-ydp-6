const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app); // http 서버
const io = socketIO(server); // socket 서버

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
})

// [4] 유저 리스트
// 사용자 정보 갱신 함수

// Ex)
// 사용자 A (socket.id:"1234", userName: "Ace")
// 사용자 B (socket.id:"5678", userName: "Bob")

function getUserList(room) {
    // room에 접속한 모든 사용자 정보를 저장할 배열 초기화.
    const users =[];

    // room는 접속 한 룸 id
    // 특정 채팅방에 접속한 socket.id 집합 값을 찾음
    const clients = io.sockets.adapter.rooms.get(room);
    //  Set {"1234" , "5678"};

    // 'io' 객체
    // - Socket.IO 인스턴스를 나타내는 객체 :: 전체 소켓 서버를 관리.

    // 'io.sockets'
    // - 현재 연결된 모든 소켓들을 관리하는 객체 :: 소켓들의 상태를 관리하고 다양한 소켓 관련 작업 수행.

    // 'io.sockets.adapter'
    // - 소켓 서버 간의 상태를 관리하는 역할을 담당하는 객체 :: 소켓들의 연결 상태와 방(room) 정보를 관리.

    // 'io.sockets.adapter.room'
    // - 모든 방(room) 정보를 저장하고 있는 객체 :: 각 방에 접속한 클라이언트들의 정보를 포함.

    // 'get(room)'
    // - 위 객체에서 특정 방(room) ID에 해당하는 정보를 가져오는 역할 :: 해당 방에 접속한 클라이언트들의 소켓 ID 들을 Set형태로 반환.

    // 방에 클라이언트가 있는 경우에 실행!
    if(clients) {
        // 각 socket.ID에 대해 반복 실행
        clients.forEach((client) => {
            console.log("client >>>>> ", client);

            // socket.ID로 소켓 객체 가져오기.
            // io.sockets.sockets : socket.id가 할당한 변수들의 객체 값.
            const userSocket = io.sockets.sockets.get(client);
            // console.log("userSocket >>>> ", userSocket);

            // 사용자 정보 객체 생성
            const info = {userName : userSocket.userName, key: client}

            // 사용자 정보를 배열에 추가
            users.push(info);
        })
    }
    return users; 
    // users = [{userName: "Ace", key:"1234"}, {userName:"Bob", key:"5678"}]

}





io.on('connection', (socket) => {
    // socket : 접속한 웹 브라우저
    // io : 접속해 있는 모든 웹 브라우저
    // 웹 브라우저가 접속이 되면 고유한 id 값이 생성됨.
    // ==> socket.id 로 확인 가능.
    console.log("서버 연결 완료 ::" , socket.id);

    // [2] 채팅방 만들기
    socket.on('create', (res) => {
        console.log("res >>>> ", res);
        // { roomName: '새싹', userName: '데이먼' }

        // join(방 제목) : 해당 방 제목이 없으면 생성, 존재하면 입장.
        console.log(res.roomName); // 새싹
        socket.join(res.roomName); 
        console.log('방 생성 후', socket.rooms);

        // 사용자 정보 저장 = socket 객체 안에 원하는 값을 할당.
        socket.roomName = res.roomName; // socket 객체에 없는 메소드를 생성. // "새싹"
        socket.userName = res.userName;
        console.log("socket.roomName >>> ", socket.roomName);

        // [3] 공지 알림 (본인 제외)
        // 나를 제외한 모든 방 사람들에게 메세지 전달.
        socket.to(res.roomName).emit('notice', `${socket.userName} 님이 입장하셨습니다.`)

        // [4] 유저 리스트 갱신
        const userList = getUserList(res.roomName);
        console.log('userList >>>> ', userList);
        io.to(res.roomName).emit('userList', userList)
    })

    
})


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})