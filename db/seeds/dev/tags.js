const knex = require('knex');
var faker = require('faker');

const newBatch = () => {
  var array = []
  for( i = 0; i < 100; i++){
    array.push({
      name: faker.random.word(), 
      createdAt: knex.raw('CURRENT_TIMESTAMP'),
      updatedAt: knex.raw('CURRENT_TIMESTAMP') 
    })
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
  // return knex('tags').del()
    // .then(() => {
      // })
    // })
    count++
    return knex('tags').insert(newBatch()).then(() => {
      return count < 10 ? seed(knex, Promise) : console.log('done')
    })
};

exports.seed = seed;