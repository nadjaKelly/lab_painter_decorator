const assert = require('assert');
const Room = require('../room.js');


describe('Room', function() {

  let room;

  beforeEach(function() {
    room = new Room(9);
  });

  it('should have an area in square meters', function() {
    const actual = room.area;
    assert.strictEqual(actual, 9)

  });

  it('should start not unpainted', function() {
    const actual = room.paintStatus;
    assert.strictEqual(actual, 0)
  });

  it('should be able to be painted', function() {
    room.paint(5)
    const actual = room.paintStatus;
    assert.strictEqual(actual, 5)
  });




})
