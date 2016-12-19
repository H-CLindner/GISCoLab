(function() {

    angular
        .module('giscolab')
        .controller('currentCtrl', currentCtrl);

    function currentCtrl($location) {
        console.log('Current controller is running');
    }

})();

