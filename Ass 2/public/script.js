
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_rktaopD7SwtUlxHdzZQzCdJ9YTc3ASA",
    authDomain: "fbase-5b820.firebaseapp.com",
    projectId: "fbase-5b820",
    storageBucket: "fbase-5b820.appspot.com",
    messagingSenderId: "1012678151d293263d974e9fa89b777d",
    measurementId: "G-P9B57VE1T4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


// const myBtn = () => {
document.getElementById('btn').addEventListener("click", () => {
    alert("rthjhytre")
    signInWithPopup(auth, provider)
        .then((result) => {
            alert('see')
            // console.log(result)
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const user = result.user;
            // console.log(user)

            let name = result.displayName
            disp.innerHTML = `
                <p>Welcome, ${result.user.name}</p>
                <p>Welcome, ${result.user.email}</p>
                <img src='${result.user.photoURL}'/>
                `

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
})

const click=()=>{
    alert("rthjhytre")
    signInWithPopup(auth, provider)
        .then((result) => {
            alert('see')
            // console.log(result)
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const user = result.user;
            // console.log(user)

            let name = result.displayName
            disp.innerHTML = `
                <p>Welcome, ${result.user.name}</p>
                <p>Welcome, ${result.user.email}</p>
                <img src='${result.user.photoURL}'/>
                `

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}
// }
// window.myBtn = myBtn