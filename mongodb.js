const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/videoService')
const Video = mongoose.model('Video', {
  name: String,
  description: String,
  duration: Number,
  link: String,
});

const Tag = mongoose.model('Tag', {
  name: String,

});

const Chanel = mongoose.model('Chanel', {
  name: String,
  owner: Number,
});

const saveVideo = (obj, callback) => {
  const video = new Video(obj);
  video.save().then(() => callback());
}

const newTag = (obj, callback) => {
  const tag = new Tag(obj);
  tag.save().then(() => callback());
}

module.exports = {
  saveVideo,
  newTag,
}