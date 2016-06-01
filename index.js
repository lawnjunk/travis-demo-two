'use strict';

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/wat';
mongoose.connect(mongoURI);

const slugSchema = mongoose.Schema({
  name: String
});

const Slug = mongoose.model('slug', slugSchema);

exports.createSlug  = function(name){
  return new Slug({name: name});
};

exports.saveSlug = function(slug, callback){
  slug.save(callback);
};
