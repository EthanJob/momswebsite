const app = angular.module('MomsWebsite', []);

app.controller('MainController', ['$http', function($http) {

  this.reload = () => {
    location.reload();
  };

  this.home = true;
  this.lunch = false;
  this.dinner = false;
  this.dessert = false;

  this.lunchFunc = () => {
    this.home = false;
    this.lunch = true;
    this.dinner = false;
    this.dessert = false;
    console.log("home =", this.home);
    console.log("lunch =", this.lunch);
    console.log("dinner =", this.dinner);
    console.log("dessert =", this.dessert);
    console.log("=================");
  };

  this.dinnerFunc = () => {
    this.home = false;
    this.lunch = false;
    this.dinner = true;
    this.dessert = false;
    console.log("home =", this.home);
    console.log("lunch =", this.lunch);
    console.log("dinner =", this.dinner);
    console.log("dessert =", this.dessert);
    console.log("=================");
  };

  this.dessertFunc = () => {
    this.home = false;
    this.lunch = false;
    this.dinner = false;
    this.dessert = true;
    console.log("home =", this.home);
    console.log("lunch =", this.lunch);
    console.log("dinner =", this.dinner);
    console.log("dessert =", this.dessert);
    console.log("=================");
  };

  console.log("home =", this.home);
  console.log("lunch =", this.lunch);
  console.log("dinner =", this.dinner);
  console.log("dessert =", this.dessert);
  console.log("=================");


}]);
