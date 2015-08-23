app.controller('aboutCtrl', function($scope, $routeParams, $route, $location,
  dataService) {
  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.aboutSWYC = function() {
    $scope.aboutInfo = dataService.aboutSWYC();
  };

  $scope.aboutSWYC();


  $scope.test = "HEllo World";
  //end homeCtrl
})
