  app.service('registrationService', function($http, $q, $location) {


    var registerArr = [];

    this.register = function(data) {
      registerArr.push(data);
      console.log('this is my data', registerArr);
      return registerArr;
    };

    this.postUser = function(data) {
      data.role = "attendee";
      console.log('this is in postProduct', data);
      return $http({
        url: 'http://localhost:3000/api/user',
        method: 'POST',
        data: data
      })
    };

    this.postReg = function(data) {
      data.checkin = "false";
      console.log('this is in postRegSrvc', data);
      return $http({
        url: 'http://localhost:3000/api/registration',
        method: 'POST',
        data: data
      })
    };

    this.login = function(data) {
      var deferred = $q.defer();
      console.log('this is login', data);
      $http({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: data
      }).then(function(data) {
        // $location.path("/register");
        deferred.resolve(data.data)
      })
      return deferred.promise;
    };

    //end service
  })
