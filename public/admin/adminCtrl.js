app.controller('adminCtrl', function($scope, $filter, $routeParams,
  $route, $location,
  adminService) {

  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.regInfo = [];

  $scope.getRegInfo = function() {
    adminService.getRegInfo().then(function(response) {
      // console.log('this is response', response.data);
      $scope.regInfo = response.data;
      $scope.userId = response.data._id;
      $scope.regInfoCollection = [].concat($scope.regInfo);
      console.log($scope.regInfoCollection);
    });
  };

  $scope.getRegInfo();

  $scope.total = 0;
  $scope.getTotalRegCount = 0;

  $scope.getTotal = function() {
    adminService.getRegInfo().then(function(response) {
      for (var i in response.data) {
        $scope.total += response.data[i].total;
        if (response.data.hasOwnProperty(i)) $scope.getTotalRegCount++;
      }
      console.log($scope.total);
    })
  }


  $scope.getTotalByReg; //shows how much $ for each regtype
  ; //shows how many registrations received
  $scope.getTotalRegCountByType; //shows how many registration per type



  $scope.getTotal();

  // $scope.getPerson = function() {
  //   adminService.getRegInfo().then(function(response) {
  //
  //   })
  // }

  $scope.checkIn = function(data) {
    console.log(data);
    data.checkin = true;
    adminService.checkIn(data).then(function(response) {
      console.log('repsonse says', response);
    })
  }


  //end of controller
})
