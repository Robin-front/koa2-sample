const Koa = require('koa')
const app = new Koa();
var bodyParser = require('koa-bodyparser');
import router from './routers'
var views = require('koa-views');

// 输出错误日志
const logger = require('./config/logger')

// 实时显示错误在命令行和网页
const onerror = require('koa-onerror')
onerror(app);

app.use(bodyParser());
app.use(views(__dirname + '/views', {
  extension: 'nunjucks',
  map: { nunjucks: 'nunjucks' }
}))

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
