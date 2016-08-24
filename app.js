const Koa = require('koa')
const app = new Koa();


app.use(async (ctx, next) => {
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
});
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
