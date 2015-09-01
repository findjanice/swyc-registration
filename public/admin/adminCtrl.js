app.controller('adminCtrl', function($scope, $routeParams, $route, $location,
  adminService) {

  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });


  $scope.getRegInfo = function() {
    adminService.getRegInfo().then(function(response) {
      $scope.regInfo = response.data;
    });
  };

  $scope.getRegInfo();


  //end of controller
})
