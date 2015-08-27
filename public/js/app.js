var app = angular.module('swyc', ['ngMaterial', 'ngRoute', 'ngMessages']);

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
    .when('/register', {
      templateUrl: 'swyc/template/register.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/lodge', {
      templateUrl: 'swyc/template/lodge.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/cabin', {
      templateUrl: 'swyc/template/cabin.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/user-reg', {
      templateUrl: 'swyc/template/user-reg.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'contactCtrl',
      css: 'contact/contact.css'
    })
    .otherwise({
      redirectTo: '/home'
    })
  $mdThemingProvider.theme('default')
    .primaryPalette('grey');
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue');

  //end config
})
