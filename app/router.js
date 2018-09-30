'use strict';

module.exports = app => {
  const { router, controller } = app;
  const apiRouter = router.namespace('/api/v1');


  // 页面路由
  router.get('/', controller.home.index);


  // 提供对外的接口
  apiRouter.post('/login', controller.login);
};
