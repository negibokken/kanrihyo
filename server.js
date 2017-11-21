const koa = require('koa');
const views = require('koa-views');
const app = new koa();
const path = require('path');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const serve = require('koa-static');

// renders (views)
const render = views(path.join(__dirname, ''));

// Middlewares
app.use(serve('./dist'));
app.use(logger());
app.use(render);
app.use(koaBody());

// routing
router.get('/', index);

app.use(router.routes());

// handler
async function index(ctx) {
  await ctx.render('index');
}

async function create(ctx) {
  ctx.body = `${ctx.params.id}:create`
}

async function edit(ctx) {
  ctx.body = `${ctx.params.id}:edit`
}

// listener
if (!module.parent) app.listen(3000);
