
const express = require('express');

let router = express.Router();

/* 渲染主页 */
router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;
