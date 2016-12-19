(function () {

  angular.module('giscolab', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/current', {
        templateUrl: 'views/current.html',
        controller: 'currentCtrl',
        //controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/projects.html',
        controller: 'projectsCtrl',
        //controllerAs: 'vm'
      })
      .when('/profile', {
        templateUrl: 'views/profil.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });
  }
  
  angular
    .module('giscolab')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

})();