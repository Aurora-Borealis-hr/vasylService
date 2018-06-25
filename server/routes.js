const express = require('express');
const router = express.Router();

const getVideo = require('./request-handlers').getVideo;
const status = require('./request-handlers').status;
const newVideo = require('./request-handlers').newVideo;
const newTag = require('./request-handlers').newTag;
const tagVideo = require('./request-handlers').tagVideo;
const getTagsForVideo = require('./request-handlers').getTagsForVideo;

router.get('/status', status);
router.get('/videos/:videoId', getVideo);
router.post('/videos', newVideo);
router.post('/tags', newTag);
router.post('/videos/tags', tagVideo);
router.post('/tags/videos', tagVideo);
router.get('/videos/:videoId/tags', getTagsForVideo);

module.exports = router;
