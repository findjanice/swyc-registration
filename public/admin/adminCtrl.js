app.controller('adminCtrl', function($scope, $filter, $routeParams,
  $route, $location, adminService) {

  $scope.personId = $routeParams.person;


  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  };

  $scope.regInfo = [];

  $scope.checkIn = function(data) {
    console.log(data);
    data.checkin = true;
    adminService.checkIn(data).then(function(response) {
      console.log('repsonse says', response);
    })
  }

  //edit items
  $scope.updateUser = function(data) {
    adminService.updateUser(data).then(function(response) {
      $location.path("/admin-checkinview");
    })
  }

  $scope.getRegInfo = function() {
    adminService.getRegInfo().then(function(response) {
      $scope.regInfo = response;
      $scope.userId = response._id;
      $scope.regInfoCollection = [].concat($scope.regInfo);
    });
  };

  $scope.getRegInfo();

  $scope.getRegbyId = function() {
    adminService.getRegbyId($scope.personId).then(function(response) {
      console.log('this is the response', response);
      $scope.personData = response;

    })
  }

  $scope.getRegbyId();

  //this is for admin-regView and dashboard

  $scope.total = 0;
  $scope.getTotalRegCount = 0;

  $scope.getTotal = function() {
    adminService.getRegInfo().then(function(response) {
      for (var i in response) {
        $scope.total += response[i].total;
        if (response.hasOwnProperty(i)) $scope.getTotalRegCount++;
      }
      console.log($scope.total);
    })
  }

  $scope.getTotalbyReg = function() {
    adminService.getRegInfo().then(function(response) {
      console.log('this is response', response)
      for (var i in response) {
        $scope.total += response[i].total;
        if (response.hasOwnProperty(i)) $scope.getTotalRegCount++;
      }
      console.log($scope.total);
    })
  }

  $scope.getTotalByReg; //shows how much $ for each regtype
  ; //shows how many registrations received
  $scope.getTotalRegCountByType; //shows how many registration per type
  $scope.getTotalRegCountByRoom; //shows how many registration per room


  $scope.getTotal();



  //end of controller
})
