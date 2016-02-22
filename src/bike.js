function bike(){
  this.working = true;
}

bike.prototype.broken = function(){
  this.working = false;
};

bike.prototype.fix = function(){
  this.working = true;
};

bike.prototype.isWorking = function(){
  return this.working;
};
