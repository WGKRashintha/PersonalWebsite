import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase , set, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_3H_fuv4cFFmRsInpFFhQLhWgcUZNfQw",
    authDomain: "testproject-ce7c2.firebaseapp.com",
    databaseURL: "https://testproject-ce7c2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testproject-ce7c2",
    storageBucket: "testproject-ce7c2.appspot.com",
    messagingSenderId: "220815256306",
    appId: "1:220815256306:web:dbc9af7e28fa7302797e6b",
    measurementId: "G-7EL930JJT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
const db = getDatabase(app);

function clearFields(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}

document.getElementById("userForm").addEventListener("submit" , function(e){
    e.preventDefault();
    let userName= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message= document.getElementById("message").value;

    set(ref(db, 'users/' + userName), {
        userName:userName,
        email:email,
        message:message,
    })
    if(e.isTrusted==true){
        clearFields();
        alert("Successfully sent");
    }else{
        alert("Message not sent !");
    }
});
