function van(){
  this.brokenBikes = [];
}

// van.prototype.collectBikes = function(dockingstationbikes){
//     this.filterBrokenBikes(dockingstationbikes);
// };

// van.prototype.filterBrokenBikes = function(dockingstationbikes){
//   var array = this.brokenBikes;
//   dockingstationbikes.forEach(function(f){
//     if (f.working === false) {
//       array.push(f);
//     }
//   });


van.prototype.try = function(dockingstationbikes){
  var box = this.brokenBikes;
  dockingstationbikes.forEach(function(x){
    if (x.working === false);
      // box.push(x);
      box.push(x);
      // this.brokenBikes.push(box);
  });
    // this.brokenBikes.push(box);


};
