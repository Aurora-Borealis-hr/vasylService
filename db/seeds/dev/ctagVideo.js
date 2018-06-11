const knex = require('knex');
var faker = require('faker');

var randomInRange = (num) => {
	return Math.ceil(Math.random() * num)
}

const newBatch = () => {
  var array = []
  for( i = 0; i < 1000; i++){
    var obj = {
      videoid: randomInRange(2000000),
      tagid: randomInRange(2000000),
      createdAt: knex.raw('CURRENT_TIMESTAMP'),
      updatedAt: knex.raw('CURRENT_TIMESTAMP') 
    }
    array.push(obj)
  }
  return array;
}

let count = 0;
const seed = function(knex, Promise) {
    count++
    return knex('tagvideo').insert(newBatch()).then(() => {
      return count < 3000 ? seed(knex, Promise) : console.log('done')
    })  
};

exports.seed = seed;