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

  $scope.getRegTotal = function() {
    adminService.getRegInfo().then(function(response) {
      console.log('this is response', response)
      for (var i in response) {
        if (response.hasOwnProperty(i)) $scope.getTotalRegCount++;
      }
      // console.log($scope.total);
    })
  }

  $scope.getTotalPerReg = function() {
    adminService.getRegInfo().then(function(response) {
      if (response.length === 0) {
        return [];
      }
      var pref, i;
      // sort by date
      response.sort(function(a, b) {
        return (a.regtype > b.regtype) ? 1 : (a.regtype < b.regtype) ?
          -1 : 0;
      });
      // loop through the array grouping object
      pref = response[0].regtype;

      for (i = 1; i < response.length; i++) {
        if (response[i].regtype === pref) {
          //set the total
          response[i - 1].total = response[i - 1].total + response[i]
            .total;
          //remove the element
          response.splice(i, 1);
          // set i one back
          i--;
        }
        pref = response[i].regtype;
      }
      $scope.TotalRegType = response;
    })
  }

  $scope.getTotalPerReg();

  var totalReg = [];

  $scope.getRegNumbyType = function() {
    adminService.getRegInfo().then(function(response) {
      console.log('this is response', response)
      for (var i in response) {
        if (response.hasOwnProperty(i)) $scope.getTotalRegCount++;
      }
      // console.log($scope.total);
    })
  };

  $scope.regStatTotal = function() {
    adminService.getRegInfo().then(function(response) {
      var regStatArr = {};
      for (var i = 0; i < response.length; i++) {
        for (var prop in response[i]) {
          // console.log('this is', b[prop]);
          if (!regStatArr[prop]) {
            regStatArr[prop] = {};
          }
          if (!regStatArr[prop][response[i][prop]]) {
            regStatArr[prop][response[i][prop]] = 1;
          } else {
            regStatArr[prop][response[i][prop]]++;
          }
        }

        // (regStatArr, 'paid', 'attendee', '__v',
        //   '_id', 'basecost', 'checkin', 'date', 'payment', 'room',
        //   'roommate', 'shirttype', 'total');
        $scope.lodgeCabin = lodgeCabin;

        var lodgeCabin = _.pick(regStatArr, 'regtype');
        var tshirt = _.pick(regStatArr, 'shirttype');
        var checkIn = _.pick(regStatArr, 'checkin');
        var rooms = _.pick(regStatArr, 'room');
        console.log('this is rooms', rooms);

        $scope.checkin = checkIn;
        $scope.tshirt = tshirt;
        $scope.rooms = rooms;

        console.log(regStatArr);
      }
    })
  }

  $scope.regStatTotal();

  //shows how much $ for each regtype
  //shows how many registrations received
  $scope.getTotalRegCountByType; //shows how many registration per type
  $scope.getTotalRegCountByRoom; //shows how many registration per room


  $scope.getTotal();



  //end of controller
})
