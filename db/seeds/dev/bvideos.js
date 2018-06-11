const knex = require('knex');
var faker = require('faker');

const newBatch = () => {
  var array = []
  for( i = 0; i < 1000; i++){
    array.push({
      name: faker.random.words(),
      description: faker.lorem.paragraph(),
      url: faker.internet.url(),
      duration: faker.random.number(), 
      createdAt: knex.raw('CURRENT_TIMESTAMP'),
      updatedAt: knex.raw('CURRENT_TIMESTAMP') 
    })
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
    count++
    return knex('videos').insert(newBatch()).then(() => {
      return count < 2000 ? seed(knex, Promise) : console.log('done')
    })  
};

exports.seed = seed;