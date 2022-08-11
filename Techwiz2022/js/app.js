var app = angular.module("myApp", ['ngRoute'])

app.controller("appCtrl", function ($scope) {
  
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/landing-page.html",
      })
      .when("/student", {
        templateUrl: "views/student-page.html",
      });
}])