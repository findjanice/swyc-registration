app.controller('contactCtrl', function($scope, $routeParams, $route, $location,
  contactService, $mdToast, $animate) {
  $scope.$watch(function() {
    return $route.current.css;
  }, function(value) {
    $scope.css = value;
  });

  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };

  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) {
        return $scope.toastPosition[pos];
      })
      .join(' ');
  };

  $scope.user = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  $scope.postMail = function(data) {
    $scope.user = '';
    $mdToast.show(
      $mdToast.simple()
      .content('Thanks for your message ' + data.name + '! ' +
        'We\'ll be in touch shortly.')
      .position($scope.getToastPosition())
      .hideDelay(3000)
    );
    contactService.postMail(data);
  };


  //end of controller
})
