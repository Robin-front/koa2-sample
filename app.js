const Koa = require('koa')
const app = new Koa();
import router from './routers'
// require('./gb-schema.js')
// 输出错误日志
const logger = require('./config/logger')

// 实时显示错误在命令行和网页
const onerror = require('koa-onerror')
onerror(app);

app.use(async (ctx, next) => {
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
});
//
// // 路由
// const router = require('koa-router')();

/**
 * 注入路由信息
 */
router(app);

// router.get('/', function (ctx, next) {
//   ctx.body = 'hello koa2';
// });
//
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(3000);
