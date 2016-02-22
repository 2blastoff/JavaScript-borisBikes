function dockingStation(MAXBIKECAPACITY){
  this.bikes = [];
  this.MAXBIKECAPACITY = (MAXBIKECAPACITY || 10);
  this.MINBIKECAPACITY = 1;
}

dockingStation.prototype.releaseBike = function(){
  if (this.isEmpty()) return ('no bikes available');
  // return this.bikes.pop();
  if (bike.working) return this.bikes.pop();
};

dockingStation.prototype.dockBike = function(bike){
  if (this.isFull()) return ('cant dock over capacity');
  this.bikes.push(bike);
};

dockingStation.prototype.dockedBikes = function(){
  return this.bikes;
};

dockingStation.prototype.isFull = function(){
  return this.bikes.length >= this.MAXBIKECAPACITY;
};

dockingStation.prototype.isEmpty = function(){
  return this.bikes.length < this.MINBIKECAPACITY;
};
