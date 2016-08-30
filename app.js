const Koa = require('koa')
const app = new Koa();
// 路由
const router = require('koa-router')();
var views = require('koa-views');
// 输出错误日志
const logger = require('./config/logger')

// 实时显示错误在命令行和网页
const onerror = require('koa-onerror')
onerror(app);

app.use(views(__dirname + '/views', {
  extension: 'hbs',
  map: { hbs: 'handlebars' }
}))

app.use(async (ctx, next) => {
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
});

router.get('/', async function (ctx, next) {
  await ctx.render('index', {
    msg: 'robin, koko'
  })
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
