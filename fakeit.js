var faker = require('faker');
var request = require('request');
var newTag = require('./db/utils/tag').newTag;


for(var i = 0; i < 1000; i++) {
  var word = faker.random.word()
  newTag({name: word, numOfVideos: 0}, ()=>{})
}
