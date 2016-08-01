var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

_.extend(HoneyMakerBee.prototype, Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};