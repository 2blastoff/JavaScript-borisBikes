var dock, van1, bike1, bike2;

describe ('van', function(){

  beforeEach(function(){
    dock = new dockingStation();
    van1 = new van();
    bike1 = new bike();
    bike2 = new bike();
  });

  it('takes broken bikes from docking stations', function(){
    bike1.broken();
    dock.dockBike(bike1);
    dock.dockBike(bike2);
    console.log(dock.bikes);
    van1.try(dock.bikes);
    console.log(van1.brokenBikes);
    expect(van1.brokenBikes).toEqual([bike1]);
  });

});
