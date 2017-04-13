const amqp = require('amqplib');
const uuid = require('uuid/v4');

const amqpCon = amqp.connect('amqp://localhost');

amqpCon
  .then(conn => conn.createChannel())
  .then((ch) => {
    ch.assertQueue('', {
      exclusive: true,
      // expires: 5000,
      // autodelete: true,
    })
    .then((q) => {
      const corr = uuid();
      const queue = 'test_pub_sub_rpc';
      const content = 'Hello World';

      ch.sendToQueue(queue, new Buffer(content), {
        correlationId: corr,
        replyTo: q.queue,
      });

      console.log('Sent Hello World');
    });
  });
