import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBII24eqQ2zyxTvq4ADd2RRxts8r_WSO88",
  authDomain: "multi-shop-a2967.firebaseapp.com",
  projectId: "multi-shop-a2967",
  storageBucket: "multi-shop-a2967.appspot.com",
  messagingSenderId: "386825881463",
  appId: "1:386825881463:web:f9b4fa550538951cfe4372",
  measurementId: "G-2ZQPGBJ8QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providers = new FacebookAuthProvider();
export {auth,provider,providers};