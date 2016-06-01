'use strict';
process.env.MONGO_URI = 'mongodb://localhost/slugtest';

const expect = require('chai').expect;
const hello = require('../index');


describe('testing index module', function(){
  describe('testing method createSlug', function(){
    it('should return a slug', function(){
      expect(hello.createSlug('neo').name).to.equal('neo')
    });
  });

  describe('testing method saveSlug', function(){
    var slug;
    before((done) => {
      slug = hello.createSlug('neo slug');
      done()
    });

    it('should return a slug', (done ) => {
      hello.saveSlug(slug, function(err, data){
        if (err) return done(err);
        expect(data.name).to.equal('neo slug');
        done();
      });
    });
  });
});

