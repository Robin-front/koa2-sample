/**
 * 文章controller
 */
import {saveModel} from '../models/app'

export async function index (ctx, next) {
  ctx.body = 'hello koa2';
}
/**
 * 新增
 */
export async function save (ctx, next) {
  let resData = {}
  let {title, content, groupId, status} = ctx.request.body
  if (!title || !content || !groupId) {
    resData = {
      success: 0,
      msg: '文章标题、内容、所属分组Id不能为空',
      data: null
    }
  } else {
    resData = await saveModel({title: title, content: content, groupId: groupId, status: status})
  }
  ctx.body = resData
}
