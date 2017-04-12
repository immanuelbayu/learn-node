const amqp = require('amqplib');

const amqpCon = amqp.connect('amqp://localhost');

amqpCon.createChannel();
