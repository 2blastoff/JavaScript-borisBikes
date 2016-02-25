describe ('bike', function(){

beforeEach(function(){
  bike1 = new bike();

});

  describe ('#isWorking', function(){
    it ('returns working state of bike (default true)', function(){
      expect(bike1.isWorking()).toEqual(true);
    });
  });

  describe ('#broken', function(){
    it('changes the working status of bike to broken(false)', function(){
      bike1.broken();
      expect(bike1.isWorking()).toEqual(false);
    });
  });

  describe ('#fix', function(){
    it('changes the working status of broken bike to fixed(true)', function(){
      bike1.broken();
      bike1.fix();
      expect(bike1.isWorking()).toEqual(true);
    });
  });

  describe ('bike Class', function(){
    it('bike is instantiated with working value true', function(){
        expect(bike1.working).toEqual(true);
      });
  });
});
