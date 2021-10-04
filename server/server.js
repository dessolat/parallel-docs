const io = require('socket.io')(3001, {
	cors: {
				methods: ['GET', 'POST']
	}
})

io.on('connection', socket => {
	socket.on('get-document', documentId => {
		socket.join(documentId)
		const data = ''
		socket.emit('load-document', data)
	
		socket.on('send-changes', delta => {
			socket.to(documentId).emit('receive-changes', delta)
		})
	})
})