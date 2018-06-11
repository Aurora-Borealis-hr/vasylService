const app = require('./server/app');

module.exports = app.listen(process.env.PORT || process.env.NODE_ENV === 'test' ? 3001 : 3000);
