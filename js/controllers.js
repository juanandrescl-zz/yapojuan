angular.module('app.controllers', [])
  
//.controller('iniciaSesionCtrl', function($scope, Auth, nuevo ,$state , $firebaseAuth) {
.controller('iniciaSesionCtrl', function($scope, Auth,$state ) {



    $scope.auth = Auth;

 
    
    
  
    
    $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook",  
   {
  scope: "email,user_likes,user_location,user_hometown, user_birthday,public_profile,user_friends,user_about_me,user_events,user_photos,user_work_history,read_insights,publish_actions" // the permissions requested
}
    ).then(function(authData) {
       console.log("LOGIN ok");
        console.log(authData);
      //armo una llamada a firebase//
       var nau = new Firebase("https://blazing-torch-5663.firebaseio.com");
      
      

 
      //funcion verificadora por el lado de la app (esta es lesa)
      var userId=authData.uid;
      
           //pregunto si es nuevo

 console.log("¿es nuevo?")
checkForFirstTime(userId);

      
      
      
function checkForFirstTime(userId) {
  nau.child('users').child(userId).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
    userFirstTimeCallback(userId, exists);
  });
}
function userFirstTimeCallback(userId, exists) {
  if (exists) {
 console.log("usuario ya existe");
    // Do something here you want to do for non-firstime users...
  } else {
 console.log("usuario es nuevo")

console.log("comienzo a escribir")
            
             nau.child("users").child(userId).set({
              provider: authData.provider,
              name: authData.facebook.displayName,
              email: authData.facebook.email
            });
          
                console.log("ya escribí")

  }
}

  

      
      
      
   
       
    

     
      // User successfully logged in
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
         
                console.log("todo ok con error de TRANSPORT UNAVAILABLE");

          
        }) 
        
        ;
      } else {
        // Another error occurred
        console.log(error);
      }
    }) 
    
    
/*
   Auth.$onAuth(function(authData) {
  if (authData === null) {
    console.log("Not logged in yet");
  } else {
    console.log("Logged in as", authData.uid);
    console.log(authData);
   //  $state.go('menu.perfil');
  }
  $scope.authData = authData; // This will display the user's name in our view
  
  
}

)
*/
  
} 
//fin funcion//


//fin funcion//


// Create a callback which logs the current auth state




//fin funcion//



    
    
    

})
   
.controller('buscarAutosCtrl', function($scope) {

})
   
.controller('publicarAutoCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope) {
    console.log("lo tengo");
  console.log(authData);
})
   
.controller('tusAutosCtrl', function($scope) {
alert(estain);
console.log(estain);
console.log("assas");
})
   
.controller('tuAutoCtrl', function($scope) {


})
    