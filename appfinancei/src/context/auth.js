import React, {createContext, useState} from "react";
import firebase from '../services/firebaseConnection'

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false)
	async function signUp(email, password, nome) {

		
		await firebase
		  .auth()
		  .createUserWithEmailAndPassword(email, password)
		  .then(async (value) => {
			const uid = value.user.uid;
			await firebase.database().ref('users').child(uid).set({
				saldo: 0,
				nome,
			  })
			  .then(() => {
				let data = {
				  uid: uid,
				  nome:nome,
				  email: value.user.email,
				};
				alert('chegou aqui', data)
				setUser(data);
				 alert('chegou aqui', user)
			
			  });
		  })
		//   .catch((error) => {
		// 	alert(error.code);
		//   });
	  }
    return(
     <AuthContext.Provider value={{ signed: !!user , user, signUp }}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;