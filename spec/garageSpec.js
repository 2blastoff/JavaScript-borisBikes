describe ('garage', function(){

beforeEach(function(){
    dock = new dockingStation();
    van1 = new van();
    bike1 = {
      working: true,
      broken: function() {
        this.working = false;
      }
    };

    bike2 = {
      working: true,
      broken: function(){
        this.working = false;
      }
    };
    garage1 = new garage();
    bike1.broken(); bike2.broken(); dock.dockBike(bike1); dock.dockBike(bike2);
    van1.collectBrokenBikes(dock.bikes);
    van1.deliverBrokenBikes(garage1.garageBikes);
});

describe ('#holdingBikes', function(){
  it('returns bike list in garage', function(){
    expect(garage1.holdingBikes()).toEqual([bike1, bike2]);
  });
});
});
