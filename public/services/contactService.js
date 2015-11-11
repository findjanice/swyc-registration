app.service('contactService', function($http, $q) {

  this.postMail = function(data) {
    return $http({
      url: 'https://localhost:3000/contact',
      method: 'POST',
      data: data
    })
  }

  //end service
})
