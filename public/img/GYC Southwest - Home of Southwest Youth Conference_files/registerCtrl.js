app.controller('registerCtrl', function($scope, $routeParams, $route, $location,
  dataService) {
  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.tshirtType = function() {
    $scope.tshirt = dataService.tshirtType();
  };

  $scope.tshirtType();

  $scope.sizes = function() {
    $scope.size = dataService.sizes();
  };

  $scope.sizes();


  $scope.test = "HEllo World";
  //end homeCtrl
})
