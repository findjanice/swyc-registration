var app = angular.module('swyc', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider, $mdThemingProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      css: 'home/home.css'
    })
    .when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutCtrl',
      css: 'about/about.css'
    })
    .when('/swyc', {
      templateUrl: 'swyc/swyc.html',
      controller: 'swycCtrl',
      css: 'swyc/swyc.css'
    })
    .otherwise({
      redirectTo: '/home'
    })
  $mdThemingProvider.theme('default')
    .primaryPalette('grey');

  //end config
})
