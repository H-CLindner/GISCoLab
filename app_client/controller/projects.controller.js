(function() {

    angular
        .module('giscolab')
        .controller('projectsCtrl', projectsCtrl);

    function projectsCtrl($location) {
        console.log('Projects controller is running');
    }

})();

