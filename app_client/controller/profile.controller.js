(function() {
  
  angular
    .module('giscolab')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', 'meanData'];
  function profileCtrl($location, meanData) {
    var vm = this;

    vm.user = {};

    meanData.getProfile()
      .success(function(data) {
        vm.user = data;
      })
      .error(function (e) {
        console.log(e);
      });

      function saveUser() {
          userService.update(vm.user)
              .then(function(){
                  $location.path('/loginsuccess');
              })
              .catch(function (e) {
                  console.log(e);
              });
      }

      function deleteUser() {
          userService.deleteUsers(vm.user)
              .then(function(){
                  $location.path('/loginsuccess');
              })
              .catch(function (e) {
                  console.log(e);
              });
      }
  }

})();