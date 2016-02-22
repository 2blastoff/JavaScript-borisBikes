describe ('bikeSpec', function(){

});

beforeEach(function(){
  bike1 = new bike();
});

it ('returns working state of bike (default true)', function(){
  expect(bike1.isWorking()).toEqual(true);
});

it('changes the working status of bike to broken(false)', function(){
  bike1.broken();
  expect(bike1.isWorking()).toEqual(false);
});

it('bike is instantiated with working value true', function(){
  expect(bike1.working).toEqual(true);
});
