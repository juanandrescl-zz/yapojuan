angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.iniciaSesion', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iniciaSesion.html',
        controller: 'iniciaSesionCtrl'
      }
    }
  })

  .state('menu.buscarAutos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/buscarAutos.html',
        controller: 'buscarAutosCtrl'
      }
    }
  })

  .state('menu.publicarAuto', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/publicarAuto.html',
        controller: 'publicarAutoCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
       // controller: 'perfilCtrl'
        controller: 'iniciaSesionCtrl'
      }
    }
  })

  .state('menu.tusAutos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tusAutos.html',
        controller: 'tusAutosCtrl'
      }
    }
  })

  .state('tuAuto', {
    url: '/page5',
    templateUrl: 'templates/tuAuto.html',
    controller: 'tuAutoCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});