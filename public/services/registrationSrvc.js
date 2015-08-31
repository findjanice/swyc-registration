app.service('registrationService', function($http, $q) {


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

  this.postStripe = function(data) {
    return $http({
        url: 'http://localhost:3000/api/payment',
        method: 'POST',
        data: data
      }).success(function(response) {
        console.info('response stripe directive: ',
          response);
      })
      .error(function(err) {
        throw new Error(err);
      });
  };

  this.test = function() {
    console.log('this is test');
  }

  //end service
})
