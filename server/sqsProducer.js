var Producer = require('sqs-producer');
 
var producer = Producer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/951355681419/q',
  region: 'eu-west-1'
});

producer.send("hello1", function(err) {
  if (err) console.log(err);
});

producer.queueSize(function (err, size) {
  if (err) console.log(err);
 
  console.log('There are', size, 'messages on the queue.');
});

module.exports = producer;
