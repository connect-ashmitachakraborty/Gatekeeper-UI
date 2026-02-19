const passwordInput = document.querySelector('#password');
const showPass = document.querySelector('#showPassword');

showPass.addEventListener("change", () => {
  passwordInput.type = showPass.checked ? "text" : "password";
});
  


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth , GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyD8I8bzz94KCkdwt0vAqwCMlEFrME3Kdh8",
    authDomain: "devdiary-cc521.firebaseapp.com",
    projectId: "devdiary-cc521",
    storageBucket: "devdiary-cc521.firebasestorage.app",
    messagingSenderId: "233026456045",
    appId: "1:233026456045:web:dcc1eb50ca3e1c4b2e7fe4",
    measurementId: "G-C4JEDCMCQB"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const analytics = getAnalytics(app);

  const googlelogin=document.getElementById("google-login");
 googlelogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user; 
        console.log(user);
        window.location.href="../Project-4/home.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});
