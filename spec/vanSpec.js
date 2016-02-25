describe ('van', function(){

beforeEach(function(){
    dock = new dockingStation();
    van1 = new van();
    bike1 = new bike();
    bike2 = new bike();
    garage1 = new garage();
    bike1.broken(); bike2.broken(); dock.dockBike(bike1); dock.dockBike(bike2);
    van1.collectBrokenBikes(dock.bikes);
  });

  describe ('#collectBrokenBikes', function(){
    it('collects broken bikes from docking stations', function(){
      van1.collectBrokenBikes(dock.bikes);
      expect(van1.vanBikes).toEqual([bike1, bike2]);
      expect(dock.bikes).not.toContain(bike1, bike2);
    });
  });

  describe ('#deliverBrokenBikes', function(){
    it('delivers broken bikes to garage', function(){
      van1.deliverBrokenBikes(garage1.garageBikes);
      expect(van1.bikes).not.toContain(bike1, bike2);
      expect(garage1.garageBikes).toEqual([bike1, bike2]);
    });
  });

  describe ('#collectFixedBikes', function(){
    it('collects fixed bikes from garage', function(){
      van1.deliverBrokenBikes(garage1.garageBikes);
      bike1.fix();
      van1.collectFixedBikes(garage1.garageBikes);
      expect(garage1.garagebikes).not.toContain(bike1);
      expect(van1.vanBikes).toEqual([bike1]);
    });
  });

  describe ('#deliverFixedBikes', function(){
    it('delivers fixed bikes to docking station', function(){
      van1.deliverBrokenBikes(garage1.garageBikes);
      bike1.fix();
      van1.collectFixedBikes(garage1.garageBikes);
      van1.deliverFixedBikes(dock.bikes);
      expect(dock.bikes).toContain(bike1);
    });
  });
});
