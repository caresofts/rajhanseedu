
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCU1UfO4hZnlCR33vqJaFEQNWi8AkXcPqk",
    authDomain: "rajhanse-education.firebaseapp.com",
    databaseURL: "https://rajhanse-education.firebaseio.com",
    projectId: "rajhanse-education",
    storageBucket: "rajhanse-education.appspot.com",
    messagingSenderId: "275148446241",
    appId: "1:275148446241:web:cca66f7c8179e6d2eda160",
    measurementId: "G-ZEWNMLTY7P"
  };// Initialize Firebase


  firebase.initializeApp(firebaseConfig);
 
  
	const auth = firebase.auth();
	
	

	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		alert("Signed In");
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			window.location = 'si.html';
			//Take user to a different or home page

		 
		}else{
			 
             window.location = 'index.html';
        }
		
    
		
    });

	
	

