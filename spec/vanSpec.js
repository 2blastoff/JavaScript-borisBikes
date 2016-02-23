var dock, van1, bike1, bike2;

describe ('van', function(){

  beforeEach(function(){
    dock = new dockingStation();
    van1 = new van();
    bike1 = new bike();
    bike2 = new bike();
    bike3 = new bike();
    // garage1 = new garage();
    vanbrokenbikes = bike1.broken(); bike2.broken(); dock.dockBike(bike1); dock.dockBike(bike3); dock.dockBike(bike2);
  });

  it('takes broken bikes from docking stations', function(){
console.log(dock.bikes);
    van1.collectBrokenBikes(dock.bikes);
    console.log(dock.bikes);
    expect(van1.bikes).toContain(bike1);
    expect(dock.bikes).not.toContain(bike1);
  });

  // it('delivers broken bikes to garage', function(){
  //   van1.deliverBrokenBikes(garage1.bikes);
  //   expect(van1.bikes).toEqual([]);
  // });

});
