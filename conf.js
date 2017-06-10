
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

    /* 多语言包 */
    languages: {
        en: require('./data/i18n/en/main'),
        zh_CN: require('./data/i18n/zh_CN/main'),
        zh_TW: require('./data/i18n/zh_TW/main')
    },


    'date_default_timezone_set' : '',
    'set_time_limit' : 600, // 10min pathInfoMuti,search,upload,download... 
    'session_cache_expire': 600,
    'display_errors' : "on",

    'BASIC_PATH':    'P(dirname(dirname(__FILE__)./',

    'APPHOST':       'HOST.str_replace(WEB_ROOT,BASIC_PATH)',//程序根目录

    'TEMPLATE': 'BASIC_PATH .template/',//模版文件路径

    'CONTROLLER_DIR': 'BASIC_PATH .controller/', //控制器目录

    'MODEL_DIR': 'BASIC_PATH .model/',//模型目录

    'LIB_DIR': 'BASIC_PATH .lib/',//库目录

    'FUNCTION_DIR': 'LIB_DIR .function/',//函数库目录

    'CLASS_DIR': 'LIB_DIR .class/',     //内目录

    'CORER_DIR': 'LIB_DIR .core/',   //核心目录

    'DATA_PATH':     'BASIC_PATH .data/',       //用户数据目录

    'LOG_PATH':     'DATA_PATH .log/',         //日志目录

    'USER_SYSTEM':   'DATA_PATH .system/',      //用户数据存储目录

    'DATA_THUMB':    'DATA_PATH .thumb/',       //缩略图生成存放

    'LANGUAGE_PATH': 'DATA_PATH .i18n/',        //多语言目录


    'STATIC_JS': 'app',  //_dev(开发状态)||app(打包压缩)

    'STATIC_LESS': 'css',//less(开发状态)||css(打包压缩)

    'STATIC_PATH': "./static/",//静态文件目录
//
    'STATIC_PATH': 'http://static.kalcaddle.com/static/',//静态文件统分离,可单独将static部署到CDN

/*
 可以自定义【用户目录】和【公共目录】,移到web目录之外，
 可以使程序更安全, 就不用限制用户的扩展名权限了,
 */

    'USER_PATH':     'DATA_PATH .User/',        //用户目录
//自定义用户目录；需要先将data/User移到别的地方 再修改配置，例如：
//
    'USER_PATH':   'DATA_PATH ./Library/WebServer/Documents/User',

    'PUBLIC_PATH':   'DATA_PATH .public/',     //公共目录
//公共共享目录,读写权限跟随用户目录的读写权限 再修改配置，例如：
//
    'PUBLIC_PATH': '/Library/WebServer/Documents/Public/',
/*
 * office服务器配置；默认调用的微软的接口，程序需要部署到外网。
 * 本地部署weboffice 引号内填写office解析服务器地址 形如:  http://---/view.aspx?src=
 */

    'OFFICE_SERVER': "",


    'includes': [
        'FUNCTION_DIR.web.function.php',
        'FUNCTION_DIR.file.function.php',
        'CLASS_DIR.fileCache.class.php',
        'CONTROLLER_DIR.util.php',
        'CORER_DIR.Application.class.php',
        'CORER_DIR.Controller.class.php',
        'CORER_DIR.Model.class.php',
        'FUNCTION_DIR.common.function.php',
        'BASIC_PATH.config/setting.php',
        'BASIC_PATH.config/version.php'
    ],

    //数据地址定义。
   'pic_thumb': 'BASIC_PATH.data/thumb/', // 缩略图生成存放地址
   'cache_dir': 'BASIC_PATH.data/cache/', // 缓存文件地址
   'app_startTime': '',         //起始时间

    //系统编码配置
   'app_charset': 'utf-8',//该程序整体统一编码
   'check_charset': 'ASCII,UTF-8,GBK',//文件打开自动检测编码

   'system_os': 'linux',
   'system_charset': 'utf-8',

   'session_write_close': false,//避免session锁定问题,之后要修改$_SESSION 需要先调用session_start()
   'autorun': [
        {'controller':'user','function':'loginCheck'},
        {'controller':'user','function':'authCheck'}
    ],

    // 配置项可选值
    'setting_all': {
        'language'         : "en:English,zh_CN:简体中文,zh_TW:繁體中文",
        'themeall'        : "default/:<b>areo blue</b>:default,simple/:<b>simple</b>:simple,metro/:<b>metro</b>:metro,metro/blue_:metro-blue:color,metro/leaf_:metro-green:color,metro/green_:metro-green+:color,metro/grey_:metro-grey:color,metro/purple_:metro-purple:color,metro/pink_:metro-pink:color,metro/orange_:metro-orange:color",
        'codethemeall'    : "chrome,clouds,crimson_editor,eclipse,github,solarized_light,tomorrow,xcode,ambiance,idle_fingers,monokai,pastel_on_dark,solarized_dark,tomorrow_night_blue,tomorrow_night_eighties",
        'wallall'        : "1,2,3,4,5,6,7,8,9,10,11,12,13",
        'musicthemeall'    : "ting,beveled,kuwo,manila,mp3player,qqmusic,somusic,xdj",
        'moviethemeall'    : "webplayer,qqplayer,vplayer,tvlive,youtube"
    },

    //新用户初始化配置
    'setting_default': {
        'list_type'            : "icon",        // list||icon
        'list_sort_field'    : "name",        // name||size||ext||mtime
        'list_sort_order'    : "up",        // asc||desc
        'theme'                : "simple/",    // app theme [default,simple,metro/,metro/black....]
        'codetheme'            : "clouds",    // code editor theme
        'wall'                : "7",            // wall picture
        'musictheme'        : "mp3player",    // music player theme
        'movietheme'        : "webplayer"    // movie player theme
    },

    //初始化系统配置
    'setting_system_default': {
        'system_password'    : 0,
        'system_name'        : "KidExplorer",
        'system_desc'        : "——芒果云.资源管理器",
        'path_hidden'        : ".htaccess,.git,.DS_Store,.gitignore",//目录列表隐藏的项
        'auto_login'         : "1",            // 是否自动登录；登录用户为guest
        'first_in'           : "explorer",    // 登录后默认进入[explorer desktop,editor]
        'new_user_app'       : "365日历,pptv直播,ps,qq音乐,搜狐影视,时钟,天气,水果忍者,计算器,豆瓣电台,音悦台,icloud",
        'new_user_folder'    : "download,music,image,desktop"
    },

    //初始化默认菜单配置
    'setting_menu_default': [
        {'name':'desktop','type':'system','url':'index.php?desktop','target':'_self','use':'1'},
        {'name':'explorer','type':'system','url':'index.php?explorer','target':'_self','use':'1'},
        {'name':'editor','type':'system','url':'index.php?editor','target':'_self','use':'1'},
        {'name':'adminer','type':'','url':'./lib/plugins/adminer/','target':'_blank','use':'1'}
    ],

    //权限配置；精确到需要做权限控制的控制器和方法
    //需要权限认证的Action;root组无视权限
    'role_setting': {
        'explorer'    : [
            'mkdir','mkfile','pathRname','pathDelete','zip','unzip','pathCopy','pathChmod',
            'pathCute','pathCuteDrag','pathCopyDrag','clipboard','pathPast','pathInfo',
            'serverDownload','fileUpload','search','pathDeleteRecycle',
            'fileDownload','zipDownload','fileDownloadRemove','fileProxy','makeFileProxy'],
        'app'        : ['user_app','init_app','add','edit','del'],//
        'user'        : ['changePassword'],//可以设立公用账户
        'editor'    : ['fileGet','fileSave'],
        'userShare' : ['set','del'],
        'setting'    : ['set','system_setting','php_info'],
        'fav'        : ['add','del','edit'],
        'member'    : ['get','add','del','edit'],
        'group'        : ['get','add','del','edit']
    }
};

module.exports = appConf;