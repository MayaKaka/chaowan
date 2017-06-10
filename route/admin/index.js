
const express = require('express');

let router = express.Router();

/* 渲染主页 */
router.get('/', (req, res, next) => {
    res.send('My Server');
});

module.exports = router;
