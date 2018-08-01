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
    window.scrollTo(0,0);
  };

  this.dinnerFunc = () => {
    this.reset();
    this.dinner = true;
    window.scrollTo(0,0);
  };

  this.dessertFunc = () => {
    this.reset();
    this.dessert = true;
    window.scrollTo(0,0);
  };
  // functions^

}]);
