const Paint = function (amount) {
  this.amount = amount
}


Paint.prototype.empty = function () {
  this.amount = 0;
};


module.exports = Paint;
