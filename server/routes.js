const express = require('express');
const router = express.Router();

const getVideo = require('./request-handlers').getVideo;
const status = require('./request-handlers').status;
const newVideo = require('./request-handlers').newVideo;
const newTag = require('./request-handlers').newTag;
const tagVideo = require('./request-handlers').tagVideo

router.get('/status', status);
router.get('/videos/:videoId', getVideo);
router.post('/videos', newVideo);
router.post('/tags', newTag);
router.post('/videos/tags', tagVideo);
router.post('/tags/videos', tagVideo);

//TODO
// router.get('/tags/:tagId/videos', getVideosForTag);
// router.get('/videos/:tagId/tags', getTagsForVideo);

module.exports = router;
