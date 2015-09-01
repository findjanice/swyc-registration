app.service('adminService', function($http, $q) {

  this.getRegInfo = function() {
    var deferred = $q.defer();
    return $http({
      url: 'http://localhost:3000/api/registration',
      method: 'GET'
    })
  };

  //end service
})
