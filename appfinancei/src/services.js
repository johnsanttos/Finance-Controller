import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyCHqMDZgga95l9L27hSBZPkCTGRM7YauTw",
	authDomain: "appfinanceiro-e644c.firebaseapp.com",
	projectId: "appfinanceiro-e644c",
	storageBucket: "appfinanceiro-e644c.appspot.com",
	messagingSenderId: "280539524866",
	appId: "1:280539524866:web:d87b9da6dab8bc14285c1b",
	measurementId: "G-R3VMCL6SZM"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);}

  export default firebase