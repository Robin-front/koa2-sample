import {articleModel} from '../schema/app'
/**
 * 新增文章
 */
export async function saveModel(options) {
  console.log('save');
  let resData = {
    success: 0,
    msg: '',
    data: null
  }
  let article = {
    title: options.title,
    content: options.content,
    groupId: options.groupId,
    status: options.status
  }
  let queryArticleResult = await articleModel.find({title: article.title, groupId: article.groupId})
  if (!queryArticleResult.length) { //该分组下不存在同名文章，新增该文章
    let articleEntity = new articleModel(article)
    try {
      let result = await articleEntity.save()
      if (result) {
        resData.success = 1
        resData.msg = '新增成功'
        resData.data = result
      } else {
        resData.msg = '新增失败'
      }
    } catch (e) {
      console.log(e)
      resData.msg = '新增失败'
    }
  } else {
    resData.msg = '同一分组下不能存在同名文章'
  }
  return resData
}
