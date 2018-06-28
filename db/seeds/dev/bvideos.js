const knex = require('knex');
var faker = require('faker');

var numberOfRecords = 2000000;
module.exports.numberOfRecords = numberOfRecords;

const newBatch = () => {
  var array = []
  for( i = 0; i < 5000; i++){
    array.push({
      name: faker.random.words(),
      description: faker.lorem.paragraph(),
      url: faker.internet.url(),
      duration: faker.random.number(), 
      channelId: Math.ceil(Math.random() * 500000),
    })
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
    count+= 5000
    return knex('videos').insert(newBatch()).then(() => {
      return count < numberOfRecords ? seed(knex, Promise) : console.log('finished seeding videos table')
    })  
};

exports.seed = seed;