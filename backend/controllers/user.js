
const { Router } = require('express');
const auth = require('../services/auth');
const router = Router();

// example of public route
router.post('/user/list', function(req, res) {
    res.json({user: []})
});

// example of private route
router.post('/user/details', auth.autherticationMiddleware, function(req, res) {
    res.json({user: {}})
});

module.exports = router;