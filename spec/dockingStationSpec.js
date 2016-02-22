describe ('dockingStation', function(){
 var first;
});

beforeEach(function(){
  dock = new dockingStation();
  bike1 = new bike();
  bike2 = new bike();
  MAXBIKECAPACITY = dock.MAXBIKECAPACITY;
});

it ('allows a bike to be docked and users to see docked bikes', function(){
  dock.dockBike(bike1);
  expect(dock.bikes).toContain(bike1);
});

it('allows users to see all docked bikes', function(){
  dock.dockBike(bike1);
  dock.dockBike(bike2);
  expect(dock.dockedBikes()).toEqual([bike1,bike2]);
});

it('returns error when no bikes available', function(){
  expect(dock.releaseBike()).toEqual('no bikes available');
});

it('releases a bike and correctly reduces the bikes array', function(){
  dock.dockBike(bike1);
  dock.dockBike(bike2);
  // dock.releaseBike(bike2);
  expect(dock.releaseBike()).toEqual(bike2);
  expect(dock.dockedBikes()).toEqual([bike1]);
});

it('does not accept more bikes than MAXBIKECAPACITY', function(){
  for(var i = 0; i < MAXBIKECAPACITY; i++){
    dock.dockBike();
  }
  expect(dock.dockBike()).toEqual('cant dock over capacity');
});

it('returns true when the docking station is full', function(){
  for(var i = 0; i < MAXBIKECAPACITY; i++){
    dock.dockBike();
  }
  expect(dock.isFull()).toEqual(true);
});

it('states the docking station is not full', function(){
  dock.dockBike();
  expect(dock.isFull()).toEqual(false);
});

it('allows broken bikes to be returned', function (){
  bike1.broken();
  // console.log(bike1);
  dock.dockBike(bike1);
  // console.log(dock.bikes);
  expect(dock.bikes).toContain(bike1);

});
