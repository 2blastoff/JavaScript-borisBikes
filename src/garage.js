function garage(){
  this.garageBikes = [];
}

garage.prototype.holdingBikes = function(){
  return this.garageBikes;
};
