'use strict';

var _ = require('underscore');

var low = require('lowdb');
var db = low('db.json');
db._.mixin(require('underscore-db'));

var faker = require('faker');

// Empty the db
db('issues').remove();

// Insert couple of random records
for (var i = 0; i < 512; i++) {
  db('issues').insert({
    number: faker.random.number(),
    title: faker.lorem.sentence().slice(0, -1)
  });
}

db.save();
