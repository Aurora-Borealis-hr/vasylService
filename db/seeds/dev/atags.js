const knex = require('knex');
var faker = require('faker');

var numberOfRecords = 1000000
module.exports.numberOfRecords = numberOfRecords;

const newBatch = () => {
  var array = []
  for( i = 0; i < 5000 ; i++){
    array.push({
      name: faker.random.word(), 
    })
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
    count+= 5000
    return knex('tags').insert(newBatch()).then(() => {
      return count < numberOfRecords ? seed(knex, Promise) : console.log('finished seeding tags table')
    })
};

exports.seed = seed;
