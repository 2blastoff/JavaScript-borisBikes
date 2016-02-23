function van(){
  this.bikes = [];
}

van.prototype.collectBrokenBikes = function(dockingstationbikes){
  var box = this.bikes;
  dockingstationbikes.forEach(function(x){
    if (x.working === false) box.push(x);
    for (i = 0; i < dockingstationbikes.length; ++i) {
    if (dockingstationbikes[i].working === false ) {
        dockingstationbikes.splice(i--, 1);
    }
}


  });

// van.prototype.deliverBrokenBikes = function(garage){
//   var box = this.bikes;
//   box.forEach(function(x){
//     garage.push(x);
//   });
// };


};
