const app = angular.module('MomsWebsite', []);

app.controller('MainController', ['$http', function($http) {

  this.test = () => {
    console.log("it's connected");
  };

  this.home = true;
  this.lunch = false;
  this.dinner = false;
  this.dessert = false;

  this.changeTest = () => {
    this.home = false;
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
