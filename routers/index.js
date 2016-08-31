/**
 * 路由入口
 */
import Router from 'koa-router'

import App from './app'

const router = new Router()

export default function (app) {
  App(app, router)
}
