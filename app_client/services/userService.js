(function(){

    angular
        .module('openSenseMapApp')
        .service('userService', userService);

    userService.$inject = ['$http', 'authentication'];
    function userService($http, authentication) {
        //var userService = {};

        //userService.update = update;

        //return userService;


        function update(user) {
            console.log(user);
            return $http.post('/api/users/' + user._id, user, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }})
        };

        function deleteUsers(user) {
            return $http.post('/api/users/delete/' + user._id, user, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }})
        };

        return {
            update : update,
            deleteUsers : deleteUsers
        };

    }
})();
