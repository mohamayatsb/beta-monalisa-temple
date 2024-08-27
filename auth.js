// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQPf08Yo53PEv9HOoU6PHxtsIgfveIj7A",
  authDomain: "mondir-app.firebaseapp.com",
  projectId: "mondir-app",
  storageBucket: "mondir-app.appspot.com",
  messagingSenderId: "1010908784407",
  appId: "1:1010908784407:web:6436a643eb23178158b952"
        };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});