const amqp = require('amqplib');
// const uuid = require('uuid/v4');

const amqpCon = amqp.connect('amqp://localhost');

amqpCon
  .then(conn => conn.createChannel())
  .then((ch) => {
    const queue = 'test_pub_sub_rpc';
    ch.assertQueue(queue, { durable: false });
    ch.prefetch(1000);
    ch.consume(queue, (msg) => {
      const content = msg.content.toString();
      const replyWord = 'Hi There';
      console.log(content);
      ch.ack(msg);
      ch.sendToQueue(
        msg.properties.replyTo,
        Buffer.from(replyWord),
        { correlationId: msg.properties.correlationId });

      console.log(replyWord);
    });
  });
