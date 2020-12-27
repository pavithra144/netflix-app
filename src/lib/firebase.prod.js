import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAz5pvv16yWeLD15kisndiIzYZ5a7EAxOU",
  authDomain: "netflix-clone-adv-2b7ae.firebaseapp.com",
  databaseURL: "https://netflix-clone-adv-2b7ae.firebaseio.com",
  projectId: "netflix-clone-adv-2b7ae",
  storageBucket: "netflix-clone-adv-2b7ae.appspot.com",
  messagingSenderId: "598092932824",
  appId: "1:598092932824:web:a822ce049434eb310199ad",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
