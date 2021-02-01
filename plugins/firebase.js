import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAC-EwJbshSnqW22kXRmIpqnjlmo4A7R7M",
    authDomain: "cafe-review-app.firebaseapp.com",
    projectId: "cafe-review-app",
    storageBucket: "cafe-review-app.appspot.com",
    messagingSenderId: "889470185068",
    appId: "1:889470185068:web:22503f0d36c6852b73f249",
    measurementId: "G-XVCGP8MVTN"
  })
}

export default firebase
