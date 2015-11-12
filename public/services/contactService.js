app.service('contactService', function($http, $q) {

  this.postMail = function(data) {
    return $http({
      url: '/contact',
      method: 'POST',
      data: data
    })
  }

  //end service
})
