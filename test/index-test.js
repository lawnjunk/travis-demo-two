'use strict';
const assert = require('assert');
const hello = require('../index');

describe('testing index module', function(){
  it('should return "hello travis"', function(){
    assert.ok(hello() === 'hello travis');
  });
});
