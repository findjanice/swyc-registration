var app = angular.module('swyc', ['ngMaterial', 'ngRoute', 'ngMessages',
  'smart-table'
]);

app.config(function($routeProvider, $mdThemingProvider) {
  new WOW().init();
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
      controller: 'registerCtrl',
      css: 'swyc/swyc.css'
    })
    .when('/register', {
      templateUrl: 'swyc/template/register.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/check-confirm', {
      templateUrl: 'swyc/template/confirm-check.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/cc-confirm', {
      templateUrl: 'swyc/template/confirm-cc.html',
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
    .when('/cc', {
      templateUrl: 'swyc/template/cc.html',
      controller: 'registerCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/admin', {
      templateUrl: 'admin/template/admin-login.html',
      controller: 'adminCtrl',
      css: 'admin/admin.css'
    })
    .when('/admin-checkinview', {
      templateUrl: 'admin/template/admin-checkinview.html',
      controller: 'adminCtrl',
      css: 'admin/admin.css',
      resolve: {
        personId: function(adminService) {
          return adminService.getRegInfo();
        }
      }
    })
    .when('/admin-regview', {
      templateUrl: 'admin/template/admin-regview.html',
      controller: 'adminCtrl',
      css: 'admin/admin.css'
    })
    .when('/admin-checkinview/:person', {
      templateUrl: 'admin/template/person.html',
      controller: 'adminCtrl',
      css: 'admin/admin.css',
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
