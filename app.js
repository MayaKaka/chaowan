
/* 入口执行文件 */
let express = require('express');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');
let pathJoin = require('path').join;
let appConf = require('./conf');

/* 创建应用 */
let app = express();

/* 配置参数 */
let web_root = appConf.web_root;
let path_template = pathJoin(web_root, appConf.path_template);
let path_static = pathJoin(web_root, appConf.path_static);
let path_share = pathJoin(web_root, appConf.path_share);
let path_route = pathJoin(web_root, appConf.path_route);

/* 动态路由集合 */
let routes = appConf.routes;
let route_index = appConf.route_index;

/* 是否是开发模式 */
let isDev = app.get('env') === 'development';

/* 设置视图模版路径 */
app.set('views', path_template);
/* 设置视图模版引擎jade */
app.set('view engine', 'jade');
/* 设置站点icon */
app.use(favicon(pathJoin(path_static, 'img/favicon.ico')));
/* 设置日志方式dev(开发模式) */
// app.use(logger('dev'));

/* 设置cookie解析 */
app.use(cookieParser());
/* 设置session解析 */
app.use(session({
    secret: '12345',
    name: 'kid_app',
    cookie: {
        maxAge: 1000*60*60*72
    },
    resave: false,
    saveUninitialized: true
}));

/* 设置请求参数解析 */
app.use(bodyParser.json({
    limit: '20mb' 
}));
app.use(bodyParser.urlencoded({
    limit: '20mb', extended: false 
}));

// 设置静态文件路由
app.use('/static', express.static(path_static));
// 设置共享文件路由
app.use('/share', express.static(path_share));

// 设置动态路由
routes.forEach((route, i) => {
    try {
        // 绑定动态路由请求
        app.use(
            route.path, 
            require(pathJoin(path_route, route.file, route_index))
        );
    } catch (e) {
        console.error(e);
    }
});

// 监听404请求错误
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 渲染错误页面
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: isDev ? err : {}
    });
});

module.exports = app;
