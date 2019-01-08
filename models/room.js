const Room = function (area) {
  this.area = area
  this.paintStatus = 0

}


Room.prototype.paint = function (metersPainted) {
  this.paintStatus += metersPainted
};






module.exports = Room;
