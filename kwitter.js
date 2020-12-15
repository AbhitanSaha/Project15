function addUser(){
    username=document.getElementById("login").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}