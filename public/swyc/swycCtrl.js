app.controller('swycCtrl', function($scope, $routeParams, $route, $location) {
  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.test = "HEllo World";
  //end homeCtrl
})
