app.controller('registerCtrl', function($scope, $routeParams, $route, $location,
  $log, dataService, registrationService) {

  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });


  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  };


  $scope.tshirtType = function() {
    $scope.tshirt = dataService.tshirtType();
  };

  $scope.tshirtType();

  $scope.sizes = function() {
    $scope.size = dataService.sizes();
  };
  $scope.sizes();

  $scope.ages = function() {
    $scope.age = dataService.ages();
  };

  $scope.ages();

  $scope.genders = function() {
    $scope.gender = dataService.genders();
  };

  $scope.genders();

  $scope.go = function(path) {
    $location.path(path);
  };

  $scope.regInfo = function() {
    $scope.regInfo = dataService.regInfo();
  };

  $scope.regInfo();

  $scope.regInfoCabin = function() {
    $scope.regInfoCabin = dataService.regInfoCabin();
  };

  $scope.regInfoCabin();

  ///setting Registration Type
  $scope.regtype = "Lodge";

  $scope.setRegType = function(type) {
    console.log("setRegType clicked")
    $scope.regtype = type;
    console.log('regtype...... ', $scope.regtype);
  }

  $scope.states = function() {
    $scope.state = dataService.states();
  }

  $scope.states();

  //this post the User data and gets the userID at user.html

  $scope.postUser = function(data) {
    console.log('this is in controller', data);
    registrationService.postUser(data)
      .then(function(data) {
        console.log(data);
        userId = data.data._id;
        console.log('this is user id', userId);
      })
  };


  $scope.postReg = function(data) {
      for (var prop in data) {
        if (data[prop] === 202) {
          data.room = "Adult - 2 Person Occpancy";
          data.basecost = 202;
        } else if (data[prop] === 174) {
          data.room = "Adult - 3 Person Occupancy";
          data.basecost = 174;

        } else if (data[prop] === 158) {
          data.room = "Adult - 4 Person Occupancy";
          data.basecost = 158;

        } else if (data[prop] === 99) {
          data.room = "Child";
          data.basecost = 99;

        } else if (data[prop] === 0) {
          data.room = "Infant - Toddler";
          data.basecost = 0;
        } else if (data[prop] === 128) {
          data.room = "Adult - Full Conference";
          data.basecost = 126;
        } else if (data[prop] === 92) {
          data.room = "Child - Full Conference";
          data.basecost = 92;
        }
      }

      data.total = $scope.total;
      data.regtype = $scope.regtype;
      data.attendee = userId;
      registrationService.postReg(data).then(function(response) {
        $location.path("/check-confirm");
      });
    }
    //end of postReg

  $scope.attendeeCC = {};

  $scope.postRegCc = function(data) {
      for (var prop in data) {
        if (data[prop] === 202) {
          data.room = "Adult - 2 Person Occpancy";
          data.basecost = 202;
        } else if (data[prop] === 174) {
          data.room = "Adult - 3 Person Occupancy";
          data.basecost = 174;

        } else if (data[prop] === 158) {
          data.room = "Adult - 4 Person Occupancy";
          data.basecost = 158;

        } else if (data[prop] === 138) {
          data.room = "Child";
          data.basecost = 138;

        } else if (data[prop] === 0) {
          data.room = "Infant - Toddler";
          data.basecost = 0;
        }
      }

      data.total = $scope.total;
      console.log('this is data.total', data.total);
      console.log(data);
      data.regtype = $scope.regtype;
      data.attendee = userId;
      console.log('this is in controller', data);
      data.paid = true;
      $scope.attendeeCC = data;
    }
    //end of postReg

  $scope.regCCPost = function() {
    registrationService.postReg($scope.attendeeCC).then(function(response) {
      $location.path("/cc-confirm");
    });
  }

  //

  $scope.getTotal = function() {
    if ($scope.register.shirttype) $scope.shirtprice = 12
    if ($scope.register.shirttype === "None") $scope.shirtprice = 0
    if (!$scope.register.shirttype) $scope.shirtprice = 0
    console.log('this is shirtprice', $scope.shirtprice);
    $scope.total = $scope.shirtprice + $scope.register.room
    console.log('this is total', $scope.total);
  }


  // $scope.submit = function(data) {
  //   for (var prop in data) {
  //     if (data[prop] === "Credit Card") {
  //       //use stripe
  //     }
  //   } else {
  //     $location.path("/check_confirm")
  //   }
  // }

  //end homeCtrl
})
