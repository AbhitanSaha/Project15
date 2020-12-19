var firebaseConfig = {
      apiKey: "AIzaSyCMR7Z92IJyvYLG6Bj_rrq4a8q48Oz4FtQ",
      authDomain: "kwitter-3d7f9.firebaseapp.com",
      databaseURL: "https://kwitter-3d7f9-default-rtdb.firebaseio.com",
      projectId: "kwitter-3d7f9",
      storageBucket: "kwitter-3d7f9.appspot.com",
      messagingSenderId: "176892074085",
      appId: "1:176892074085:web:16a5c917874b868b820e8c",
      measurementId: "G-9MF3GGZZNS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
  room_name=localStorage.getItem("room_name");
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
         
        } });  }); }
  getData();
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  
  }
  function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }
