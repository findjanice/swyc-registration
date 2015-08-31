app.controller('homeCtrl', function($scope, $routeParams, $route, $location) {

  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });
  $scope.test = "Hello World";
  //end homeCtrl
})
