/**
 * Created by Hans on 29.11.2016.
 */
(function () {
    'use strict';

    angular
        .module('webapp')
        .controller('controller.home', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
    }

})();