import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { signInWithPopup } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "Domain",
  projectId: "ID",
  storageBucket: "appspot",
  messagingSenderId: "id",
  appId: "id",
  measurementId: "id"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

const signIn = () => {
  return signInWithPopup(auth, provider);
}


export { auth, provider, storage, signIn };
export default db;
