const express = require('express');

const router = express.Router();

const followsController = require('../controllers/followsController');
const checkAuth = require('../middlewares/checkAuth');

router.route('/follow/:id').patch(checkAuth, followsController.follow);
router.route('/unfollow/:id').patch(checkAuth, followsController.unfollow);

module.exports = router;
