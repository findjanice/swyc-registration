app.service('contactService', function($http, $q) {

  this.postMail = function(data) {
    console.log('this is posting mail', data);
    return $http({
      url: 'http://localhost:3000/contact',
      method: 'POST',
      data: data
    })
  }

  //end service
})
