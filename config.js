import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyC331pCgK30yzfL9En74T7SzxxOMkiPIX8",
  authDomain: "let-s-ride-8900c.firebaseapp.com",
  projectId: "let-s-ride-8900c",
  storageBucket: "let-s-ride-8900c.appspot.com",
  messagingSenderId: "176827201123",
  appId: "1:176827201123:web:3028ef6c1843ad75f3ea56"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

