
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
    document.getElementById("well").innerHTML="Welcome " + user_name;
function addroom(){
      room_name=document.getElementById("addroom").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room_names = "+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();
function redirectToRoomName(room_name){
  console.log("pls work");
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }