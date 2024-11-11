
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {initializeApp} from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGtXrW3TAozXXzGVK_WcNrwsAYzF-GyB8",
  authDomain: "medium-clone-af361.firebaseapp.com",
  projectId: "medium-clone-af361",
  storageBucket: "medium-clone-af361.firebasestorage.app",
  messagingSenderId: "371433981308",
  appId: "1:371433981308:web:45b8927e084434042c10f9",
  measurementId: "G-68ZFVYTK3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };