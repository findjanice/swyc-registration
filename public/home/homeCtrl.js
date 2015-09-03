app.controller('homeCtrl', function($scope, $routeParams, $route, $location) {

  new WOW().init();

  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  //end homeCtrl
})
