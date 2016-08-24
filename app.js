const Koa = require('koa')
const app = new Koa();

// 输出错误日志
const logger = require('./config/logger')

// 实时显示错误在命令行和网页
const onerror = require('koa-onerror')
onerror(app);

app.use(async (ctx, next) => {
  throw new Error('123')
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
});
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
