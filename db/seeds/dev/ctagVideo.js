const knex = require('knex');
var faker = require('faker');

var numberOfVideos = require('./bvideos').numberOfRecords;
var numberOfTags = require('./atags').numberOfRecords;

var randomInRange = (num) => {
	return Math.ceil(Math.random() * num)
}

var numberOfRecords = 1000000

const newBatch = () => {
  var array = []
  for( i = 0; i < 5000; i++){
    var obj = {
      videoid: randomInRange(numberOfVideos),
      tagid: randomInRange(numberOfTags),
    }
    array.push(obj)
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
    count+= 5000;
    return knex('tagvideo').insert(newBatch()).then(() => {
      return count < numberOfRecords ? seed(knex, Promise) : console.log('finished seeding tag ideo join table')
    })  
};

exports.seed = seed;