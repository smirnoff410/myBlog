var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/', {
    templateUrl: '../Views/Home.html'
  })
  .when('/About', {
    templateUrl: '../Views/About.html'
  })
  .when('/Portfolio', {
    templateUrl: '../Views/Portfolio.html'
  })
  .when('/Contacts', {
    templateUrl: '../Views/Contacts.html'
  })
  .otherwise({
    template: '<h1>404 Page not found. Sorry....</h1>'
  })
});
