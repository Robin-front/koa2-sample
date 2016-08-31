/**
 * 文章路由
 */
import {
    save,
    index,
    // remove,
    // query,
    // update,
    // getById
} from '../controllers/app'

export default function (app, router) {
    //新增
    router.post('/docs/article/save', save)

    router.get('/', index)

    // //删除
    // router.get('/docs/article/remove', remove)
    //
    // //查询
    // router.get('/docs/article/query', query)
    //
    // //更新
    // router.post('/docs/article/update', update)
    //
    // //根据Id获取文章详情
    // router.get('/docs/article/getById', getById)

    app
      .use(router.routes())
      .use(router.allowedMethods())

}
