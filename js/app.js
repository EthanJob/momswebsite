const app = angular.module('MomsWebsite', []);

app.controller('MainController', ['$http', function($scope, $http) {

  // variables
  this.home = true;
  this.lunch = false;
  this.dinner = false;
  this.dessert = false;
  // variables^

  // functions
  this.reload = () => {
    location.reload();
  };

  this.reset = () => {
    this.home = false;
    this.lunch = false;
    this.dinner = false;
    this.dessert = false;
  }

  this.lunchFunc = () => {
    this.reset();
    this.lunch = true;
  };

  this.dinnerFunc = () => {
    this.reset();
    this.dinner = true;
  };

  this.dessertFunc = () => {
    this.reset();
    this.dessert = true;
  };
  // functions^

}]);
