describe ('dockingStation', function(){

beforeEach(function(){
  dock = new dockingStation();
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
  MAXBIKECAPACITY = dock.MAXBIKECAPACITY;
});

  describe ('#dockBike', function(){
    it ('allows bikes to be docked and users to see docked bikes', function(){
      dock.dockBike(bike1);
      expect(dock.bikes).toContain(bike1);
    });
    it('does not accept more bikes than MAXBIKECAPACITY', function(){
      for(var i = 0; i < MAXBIKECAPACITY; i++){
        dock.dockBike(bike1);
      }
      expect(dock.dockBike()).toEqual('cant dock over capacity');
    });
    it('allows broken bikes to be returned', function (){
      bike1.broken();
      dock.dockBike(bike1);
      expect(dock.bikes).toContain(bike1);
    });
  });

  describe ('#releaseBike', function(){
    it('releaseBike returns an error when no bikes available', function(){
      expect(dock.releaseBike()).toEqual('no bikes available');
    });
    it('releases bikes and reduces bikes array', function(){
      dock.dockBike(bike1);
      dock.dockBike(bike2);
      expect(dock.releaseBike()).toEqual(bike2);
      expect(dock.dockedBikes()).toEqual([bike1]);
    });
    it('does not release broken bikes', function(){
      bike1.broken(); dock.dockBike(bike1);
      dock.releaseBike();
      expect(dock.dockedBikes()).toEqual([bike1]);
    });
  });

  describe ('#dockedBikes', function(){
    it('allows users to see all docked bikes', function(){
      dock.dockBike(bike1);
      dock.dockBike(bike2);
      expect(dock.dockedBikes()).toEqual([bike1,bike2]);
    });
  });

  describe ('#isFull', function(){
    it('returns false when the docking station is not full', function(){
      dock.dockBike();
      expect(dock.isFull()).toEqual(false);
    });
    it('returns true when the docking station is full', function(){
      for(var i = 0; i < MAXBIKECAPACITY; i++){
        dock.dockBike();
      }
      expect(dock.isFull()).toEqual(true);
    });
  });
});
