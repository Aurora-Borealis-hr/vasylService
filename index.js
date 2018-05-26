const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log(ctx)
  ctx.body = 'Hello World';
});

module.exports = app.listen(3000);


