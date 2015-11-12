app.service('adminService', function($http, $q) {

  this.getRegInfo = function() {
    var deferred = $q.defer();
    $http({
      url: '/api/registration',
      method: 'GET'
    }).then(function(data) {
      deferred.resolve(data.data)
    })
    return deferred.promise;
  };

  this.getRegbyId = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data,
      method: 'GET',
      data: data
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }

  this.updateUser = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data._id,
      method: 'PUT',
      data: data
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }

  this.deleteUser = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data._id,
      method: 'DELETE',
      data: data
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }


  this.checkIn = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data._id,
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
