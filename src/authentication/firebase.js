// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC49AofQe_TPjPurXDJd1Qh3Wpx2Ak2sek",
  authDomain: "dts-mini-project-pair66.firebaseapp.com",
  projectId: "dts-mini-project-pair66",
  storageBucket: "dts-mini-project-pair66.appspot.com",
  messagingSenderId: "242055398768",
  appId: "1:242055398768:web:29960316530cf4b696bbb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "user yang teregis dan berhasil login adalah",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "User yang sekarang ini berhasil login adalah ",
      userYangLogin.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};
const keluarAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth ", err.message);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  keluarAplikasi,
};
