app.service('contactService', function($http, $q) {

  this.postMail = function(data) {
    return $http({
      url: 'http://localhost:8000/contact',
      method: 'POST',
      data: data
    })
  }

  //end service
})
