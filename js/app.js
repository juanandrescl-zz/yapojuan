// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services',  'app.directives',  "firebase"])


.run(function($rootScope) {
   
    
function authDataCallback(authData) {
  if (authData) {
     console.log("loggeado siiiii");
      $rootScope.test = true
//console.log($rootScope.show);
  ;
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("loggeado NOOOO");
          $rootScope.test = false

  
       
}
}
 var marcador = new Firebase("https//blazing-torch-5663.firebaseio.com/");
marcador.onAuth(authDataCallback)

    
})  
  




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})