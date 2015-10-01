  app.service('registrationService', function($http, $q, $location) {


    var registerArr = [];

    this.register = function(data) {
      registerArr.push(data);
      return registerArr;
    };

    this.userId;

    this.postUser = function(data) {
      var deferred = $q.defer();
      data.role = "attendee";
      $http({
          url: 'http://localhost:8000/api/user',
          method: 'POST',
          data: data
        })
        .then(function(data) {
          userId = data._id;
          deferred.resolve(data.data);
        })
      return deferred.promise;
    };



    this.login = function(data) {
      var deferred = $q.defer();
      $http({
        url: 'http://localhost:8000/login',
        method: 'POST',
        data: data
      }).then(function(data) {
        userId = data._id;
        deferred.resolve(data.data)
      })
      return deferred.promise;
    };


    this.postReg = function(data) {
      data.attendee = userId;
      data.checkin = "false";
      return $http({
        url: 'http://localhost:8000/api/registration',
        method: 'POST',
        data: data
      })
    };



    //end service
  })
