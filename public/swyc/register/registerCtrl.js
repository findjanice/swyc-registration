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

  ///setting Registration Type
  $scope.regtype = "Lodge";

  $scope.setRegType = function(type) {
    console.log("setRegType clicked")
    $scope.regtype = type;
    console.log('regtype...... ', $scope.regtype);
  }



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

  $scope.total;

  var shirtValue = 0;
  //this


  $scope.postReg = function(data) {

    for (var prop in data) {
      if (data[prop] === "a") {
        data.room = "Adult - 2 Person Occpancy";
        data.basecost = 202;
      }
      if (data[prop] === "b") {
        data.room = "Adult - 3 Person Occupancy";
        data.basecost = 174;
      }
      if (data[prop] === "c") {
        data.room = "Adult - 4 Person Occupancy";
        data.basecost = 158;
      }
      if (data[prop] === "d") {
        data.room = "Child";
        data.basecost = 138;
      }
      if (data[prop] === "e") {
        data.room = "Infant - Toddler";
        data.basecost = 0;
      }
      if (prop === "shirttype") {
        shirtValue = 12;
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


  //end homeCtrl
})
