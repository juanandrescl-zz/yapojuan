angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('Auth', function($firebaseAuth) {
  var usersRef = new Firebase("https//blazing-torch-5663.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})

      
 