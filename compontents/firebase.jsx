import  firebase from 'firebase'
import "firebase/auth"
import "firebase/database"
import 'firebase/firestore'


const app = firebase.initializeApp ({
  apiKey: "AIzaSyB6dRJ4K4JxPAp_k-HgP9FcW2kYGa6hidc",
  authDomain: "resturant-35ccf.firebaseapp.com",
  databaseURL: "https://resturant-35ccf-default-rtdb.firebaseio.com",
  projectId: "resturant-35ccf",
  storageBucket: "resturant-35ccf.appspot.com",
  messagingSenderId: "422792790447",
  appId: "1:422792790447:web:1925a758a6197972ceaf5a",
  measurementId: "G-01XV3B9HWE"
});

export const auth = app.auth()
export const db = app.firestore()
export const _db = app.database()
export default app