
var firebaseConfig = {
      apiKey: "AIzaSyCMR7Z92IJyvYLG6Bj_rrq4a8q48Oz4FtQ",
      authDomain: "kwitter-3d7f9.firebaseapp.com",
      projectId: "kwitter-3d7f9",
      storageBucket: "kwitter-3d7f9.appspot.com",
      messagingSenderId: "176892074085",
      appId: "1:176892074085:web:16a5c917874b868b820e8c",
      measurementId: "G-9MF3GGZZNS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
