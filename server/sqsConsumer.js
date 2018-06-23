const Consumer = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/951355681419/q',
  handleMessage: (message, done) => {
      // console.log('this is a message >>>>>>>>  ', message)
    done();
  }
});
 
app.on('error', (err) => {
  console.log(err.message);
});
 
app.start();

module.exports = app;