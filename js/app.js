const app = angular.module('MomsWebsite', []);

app.controller('MainController', ['$http', function($http) {

  this.test = () => {
    console.log("it's connected");
  }


}]);
