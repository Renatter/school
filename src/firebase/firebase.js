import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmQnYHahpZh9Qos0jK6zrcJaD45i4ON3M",
    authDomain: "school-f985f.firebaseapp.com",
    projectId: "school-f985f",
    storageBucket: "school-f985f.appspot.com",
    messagingSenderId: "729414002443",
    appId: "1:729414002443:web:68e13d21f9c17f9d4c640e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}