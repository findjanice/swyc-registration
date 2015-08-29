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


  var shirtValue = 12;
  //this

  var total = 0;

  var cost = 0;

  $scope.postReg = function(data) {

    for (var prop in data) {
      if (data[prop] === 202) {
        data.room = "Adult - 2 Person Occpancy";
        data.basecost = 202;
      }
      if (data[prop] === 174) {
        data.room = "Adult - 3 Person Occupancy";
        data.basecost = 174;

      }
      if (data[prop] === 158) {
        data.room = "Adult - 4 Person Occupancy";
        data.basecost = 158;

      }
      if (data[prop] === 138) {
        data.room = "Child";
        data.basecost = 138;

      }
      if (data[prop] === 0) {
        data.room = "Infant - Toddler";
        data.basecost = 0;
      }
      if (data[prop] === "None") {
        shirtValue = 0;
      }
    }

    console.log(shirtValue);
    data.total = shirtValue + data.basecost;
    console.log('this is data.total', data.total);
    console.log(data);
    data.regtype = $scope.regtype;
    data.attendee = userId;
    console.log('this is in controller', data);
    registrationService.postReg(data)
      .then(function(data) {
        console.log('this is controller promise data', data);
      })
  };


  //total

  //end homeCtrl
})
