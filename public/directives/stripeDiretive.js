app.directive('stripeTransact', function($http, $rootScope) {
  return {
    restrict: 'E',
    scope: true,
    link: function(scope, elem, attrs) {

      var handler = StripeCheckout.configure({
        key: 'pk_test_xI481oAzsUc47D1izTNjWldz',
        // image: './img/cc.png',
        token: function(token) {
          console.log('this is token,',
            token);

          $http.post('/api/payment', token)
            .success(function(response) {
              console.info('response stripe directive: ',
                response);
              window.location.reload();
            })
            .error(function(err) {
              throw new Error(err);
            });
        }
      });

      $('#paymentButton').on('click', function(e) {
        // Open Checkout with further options
        handler.open({
          name: 'GYC Southwest',
          description: 'SWYC Registration',
          amount: 20200
        });
        e.preventDefault();
      });

      // Close Checkout on page navigation
      $(window).on('popstate', function() {
        handler.close();
      });
    }
  }
})
