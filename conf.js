
/* 全局应用配置 */
let appConf = {

    /* 动态路由集合 */
    routes: [
        { path: '/', file: 'index' },                 // 首页
        { path: '/admin', file: 'admin' },            // 管理后台
    ],

    route_index: 'index',                             // 路由默认文件
    
    web_root: __dirname,                              // 根路径
    web_host: 'localhost',
    path_template: 'template',                        // 视图模板路径
    path_route: 'route',                              // 路由控制器路径
    path_log: 'data/log',                             // 日志路径
    path_upload: 'data/upload',                       // 上传文件路径
    path_public: 'public',                            // 公共路径（外部可访问）
    path_static: 'public/static',                     // 静态文件路径
    path_share: 'public/share',                       // 共享文件路径
};

module.exports = appConf;