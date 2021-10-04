const io = require('socket.io')(3001, {
  cors: {
    methods: ['GET', 'POST']
  }
});
require('dotenv').config();
const mongoose = require('mongoose');
const Document = require('./models/Document');

const DB_CONNECT = process.env.DB_CONNECT;

mongoose.connect(DB_CONNECT);

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
    const { data } = await findOrCreateDocument(documentId);

    socket.join(documentId);
    socket.emit('load-document', data);

    socket.on('send-changes', delta => {
      socket.to(documentId).emit('receive-changes', delta);
    });

    socket.on('save', async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;

  return await Document.create({ _id: id });
}
