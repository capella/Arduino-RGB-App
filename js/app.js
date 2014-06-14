var app = angular.module('ArduinoLuzes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
    .state('controles', {
      url: '/controles',
      views: {
        'tab-controles': {
          templateUrl: 'templates/controles.html',
          controller: 'ControlesCtrl'
        }
      }
    })
  
  .state('dispositivos', {
      url: '/dispositivos',
      views: {
        'tab-dispositivos': {
          templateUrl: 'templates/dispositivos.html',
          controller: 'DispositivosCtrl'
        }
      }
    })

    .state('cores', {
      url: '/cores',
      views: {
        'tab-cores': {
          templateUrl: 'templates/cores.html',
          controller: 'CoresCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/controles');

});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    angular.bootstrap(document, ['ArduinoLuzes']);
    navigator.splashscreen.hide();
}