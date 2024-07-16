  console.log("firebase service worker working")
  const firebaseVersion = "8.10.0";

  importScripts("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-app.js");
  importScripts("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-messaging.js");
  addEventListener("message", onMessage);

  function onMessage(e) {
    console.log(e)
  }
  const firebaseConfig = {
    apiKey: "AIzaSyA2Vvc-nQTDAiTghhnxmL1KNrjd-khCAxw",
    authDomain: "omniengage-424c1.firebaseapp.com",
    databaseURL: "https://omniengage-424c1-default-rtdb.firebaseio.com",
    projectId: "omniengage-424c1",
    storageBucket: "omniengage-424c1.appspot.com",
    messagingSenderId: "825285028982",
    appId: "1:825285028982:web:e90a5dd5bcf45099b70357",
  };

  

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


  
  

