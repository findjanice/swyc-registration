app.controller('contactCtrl', function($scope, $routeParams, $route, $location,
  contactService) {
  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.user = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  $scope.postMail = function(data) {
    console.log('postmail Data', data);
    contactService.postMail(data);
  }

  //end of controller
})
