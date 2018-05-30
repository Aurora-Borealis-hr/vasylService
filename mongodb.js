const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/videoService')
const Video = mongoose.model('Video', {name: String});

const saveVideo = (obj, callback) => {
  const video = new Video(obj);
  video.save().then(() => callback());
}

module.exports = {
  saveVideo,
}