import "./firebase"; // default App import
import firebaseMessage from "@/firebase/firebaseMessage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firestore = firebase.firestore(); // default App 의 firestore 객체
const firedatabase = firebase.database(); // default App 의 database 객체

export default {
  
};