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

  $scope.purpose = function() {
    $scope.aboutPurpose = dataService.purpose();
  };

  $scope.purpose();

  $scope.ecom = function() {
    $scope.ecomList = dataService.ecom();
  }

  $scope.ecom();

  $scope.members = function() {
    $scope.memberList = dataService.members();
  }

  $scope.members();

  $scope.board = function() {
    $scope.boardList = dataService.board();
  };

  $scope.board();


  //end homeCtrl
})
