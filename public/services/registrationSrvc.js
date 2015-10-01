  app.service('registrationService', function($http, $q, $location) {


    var registerArr = [];

    this.register = function(data) {
      registerArr.push(data);
      console.log('this is my data', registerArr);
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
          console.log('this is regServiceData', data);
          deferred.resolve(data.data);
        })
      return deferred.promise;
    };



    this.login = function(data) {
      var deferred = $q.defer();
      console.log('this is login', data);
      $http({
        url: 'http://localhost:8000/login',
        method: 'POST',
        data: data
      }).then(function(data) {
        console.log('this is login service', data);
        userId = data._id;
        console.log('this is userId', userId);
        deferred.resolve(data.data)
      })
      return deferred.promise;
    };


    this.postReg = function(data) {
      console.log('this is data', data);
      data.attendee = userId;
      console.log('this is data.attendee',
        data.attendee
      )
      data.checkin = "false";
      return $http({
        url: 'http://localhost:8000/api/registration',
        method: 'POST',
        data: data
      })
    };



    //end service
  })
