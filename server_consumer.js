const kafka = require('kafka-node');
const express = require('express');
const port = 3000;
const app = express();

const Consumer = kafka.Consumer,
    client = new kafka.KafkaClient('localhost:9092'),
    consumer = new Consumer(
        client, [{
            topic: 'crs-poc1',
            partition: 0
        }], {
            autoCommit: false
        });

const server = app.listen(port, () => {
    console.log('Listening on port 3000');
});

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', client => {
    console.log('Connected');

    consumer.on('message', function(message) {
        console.log(message.value);
        client.emit('request', message.value);
    });

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
});