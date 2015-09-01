app.service('adminService', function($http, $q) {

  this.getRegInfo = function() {
    var deferred = $q.defer();
    $http({
      url: 'http://localhost:3000/api/registration',
      method: 'GET'
    }).then(function(data) {
      console.log('service', data)
      deferred.resolve(data.data)
    })
    return deferred.promise;
  };

  this.checkIn = function(data) {
    console.log('this is data', data);
    var deferred = $q.defer();
    $http({
      url: 'http://localhost:3000/api/registration/' + data._id,
      method: 'PUT',
      data: data,
      cache: 'true'
    }).then(function(data) {
      deferred.resolve(data.data)
    })
    return deferred.promise;
  }



  //end service
})
