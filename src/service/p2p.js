import WebSocket from 'ws';

<<<<<<< HEAD
const { P2P_PORT = 5000, PEERS } = process.env;
const peers = PEERS ? PEERS.split(',') : [];
=======
const { P2P_PORT = 5000 } = process.env;
>>>>>>> 4ed424251b89b8f4d19c5ee6ee8f32aa7080b432

class P2PService {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  listen() {
    const server = new WebSocket.Server({ port: P2P_PORT });
    server.on('connection', (socket) => this.onConnection(socket));

<<<<<<< HEAD
    peers.forEach((peer) => {
      const socket = new WebSocket(peer);
      socket.on('open', () => this.onConnection(socket));
    });

    console.log(`Service ws: ${P2P_PORT} listening...`);
=======
    console.log(`service ws:${P2P_PORT} listening...`);
>>>>>>> 4ed424251b89b8f4d19c5ee6ee8f32aa7080b432
  }

  onConnection(socket) {
    console.log('[ws:socket] connected.');
    this.sockets.push(socket);
  }
}

export default P2PService;
