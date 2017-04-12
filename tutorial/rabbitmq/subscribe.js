var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn){
	conn.createChannel(function(err, ch){
		var q = 'hello';
		var msg = 'hello world';
		ch.assertQueue(q, {durable: false});
		ch.consume(q, function(msg){
			console.log(" [x] Received %s", msg.content.toString());
		});
	}, {noAck: true});
});