//var app = angular.module('event_list', []);

// counter script

angular.module('counterTicket', []);

angular.module('counterTicket')
.controller('counterCtrl', function() {

  this.count = 0;
  
  this.minus = function() {
    this.count = this.count - 1;
  };
  
  this.add = function() {
    this.count = this.count + 1;
  };
  
  this.max = function() {
    return this.count >= 100;
  };
  
  this.zero = function() {
    return this.count === 0;
  };
  
});