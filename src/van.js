function van(){
  this.vanBikes = [];
}

van.prototype.collectBrokenBikes = function(dockingstationbikes){
  this.sortBrokenBikes(dockingstationbikes);
};

van.prototype.sortBrokenBikes = function(dockingstationbikes){
  var box = this.vanBikes;
  dockingstationbikes.forEach(function(x){
    if (x.working === false) box.push(x);
});
  for (i = 0; i < dockingstationbikes.length; ++i) {
  if (dockingstationbikes[i].working === false ) {
      dockingstationbikes.splice(i--, 1);
  }
  }
};

van.prototype.deliverBrokenBikes = function(garagebikes){
  this.vanBikes.forEach(function(x){
    if (x.working === false) garagebikes.push(x);
  });
  for (i = 0; i < this.vanBikes.length; ++i) {
      this.vanBikes.splice(i--, 1);
  }
};

van.prototype.collectFixedBikes = function(garagebikes){
  var box = this.vanBikes;
  garagebikes.forEach(function(x){
    if (x.working === true) box.push(x);
});
  for (i = 0; i < garagebikes.length; ++i) {
  if (garagebikes[i].working === true ) {
      garagebikes.splice(i--, 1);
  }
  }
};

van.prototype.deliverFixedBikes = function(dockingstationbikes){
  this.vanBikes.forEach(function(x){
    if (x.working === true) dockingstationbikes.push(x);
  });
  for (i = 0; i < this.vanBikes.length; ++i) {
    if (this.vanBikes[i].working === true ) {
      this.vanBikes.splice(i--, 1);
  }
}
};
