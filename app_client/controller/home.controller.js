(function() {
  
  angular
    .module('giscolab')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$location', 'authentication'];
    function homeCtrl($location, authentication) {

        console.log('Home controller is running');

        var vm = this;

        vm.credentials = {
            firstName : "",
            lastName : "",
            userName : "",
            email : "",
            password : ""
        };

        vm.onSubmitLogin = function () {
            authentication
                .login(vm.credentials)
                .error(function(err){
                    alert(err);
                })
                .then(function(){
                    $location.path('profile');
                });
        };

        vm.onSubmitRegister = function () {
            console.log('Submitting registration');
            authentication
                .register(vm.credentials)
                .error(function(err){
                    alert(err);
                })
                .then(function(){
                    $location.path('profile');
                });
        };

    }

})();