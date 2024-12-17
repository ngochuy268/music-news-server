const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/musicController');

router.get('/pop_music', MusicController.getAllMusic);
router.post('/pop_music', MusicController.addMusic);

module.exports = router;