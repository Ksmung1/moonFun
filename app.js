window.onload = function(){
  const firebaseConfig = {
    apiKey: "AIzaSyBPQwpOvEmG86zJtCtd10AKkaGjxS6cNMo",
    authDomain: "chatbotmoon.firebaseapp.com",
    databaseURL: "https://chatbotmoon-default-rtdb.firebaseio.com",
    projectId: "chatbotmoon",
    storageBucket: "chatbotmoon.appspot.com",
    messagingSenderId: "1059775683472",
    appId: "1:1059775683472:web:71b12e834b0f47c24db115"
  };

  firebase.initializeApp(firebaseConfig)

  var db = firebase.database()

  var submit = document.getElementById("submit")


  
  submit.addEventListener("click", (err) => {

    var message = document.getElementById("message").value;
    var name = "User";

    const id = Math.random()

    set(ref(db, "messages/" +id),{
      name: name,
      message: message
    });
    alert("message has been sent")
  })}