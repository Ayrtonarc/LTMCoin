import express from 'express';
import bodyParser from 'body-parser';
import P2PService from './p2p';

import Blockchain from '../blockchain';

const { HTTP_PORT = 3000 } = process.env;

const app = express();
const blockchain = new Blockchain();
const p2pService = new P2PService(blockchain);

blockchain.addBlock('express');

app.get('/blocks', (req, res) => {
  res.json(blockchain.blocks);
});

blockchain.addBlock('express');

app.use(bodyParser.json());

<<<<<<< HEAD
=======
app.get('/blocks', (req, res) => {
  res.json(blockchain.blocks);
});

>>>>>>> 4ed424251b89b8f4d19c5ee6ee8f32aa7080b432
app.post('/mine', (req, res) => {
  const { body: { data } } = req;
  const block = blockchain.addBlock(data);

  res.json({
    blocks: blockchain.blocks.length,
    block,
  });
});

app.listen(HTTP_PORT, () => {
  console.log(`Service HTTP:${HTTP_PORT} listening...`);
<<<<<<< HEAD
  p2pService.listen();
=======
>>>>>>> 4ed424251b89b8f4d19c5ee6ee8f32aa7080b432
});
