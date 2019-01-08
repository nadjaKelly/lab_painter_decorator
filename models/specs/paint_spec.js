const assert = require('assert');
const Paint = require('../paint.js');


describe('Paint', function() {

  let paint;


  beforeEach(function() {
    paint = new Paint(25);
  });

  it('should have a number of litres of paint', function() {
    const actual = paint.amount;
    assert.strictEqual(actual, 25)
  });

  it('should be able to empty itself of paint', function() {
    paint.empty()
    const actual = paint.amount;
    assert.strictEqual(actual, 0)
  });

  it('should be able to check if it is empty', function() {

  })






});
