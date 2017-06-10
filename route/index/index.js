
const express = require('express');

let router = express.Router();

/* 渲染主页 */
router.get('/', middle.check(), (req, res, next) => {
    res.send('My Server');
});

module.exports = router;
