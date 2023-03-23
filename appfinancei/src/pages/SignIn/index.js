import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import {useNavigation } from '@react-navigation/native'
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
	SubmitText, Link, LinkText} from './styles';
//import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../context/auth';

export default function SignIn() {
  const navigation = useNavigation ()
	const[email, setEmail] = useState('')
	const[password, setPassword] = useState('')
	const[nome, setNome] = useState('')

	const{user} = useContext(AuthContext)

	function handleSubmit(){
		console.log(user)
	}

	// useEffect(()=>{
	// 	async function dados (){
	// 	await firebase.database().ref('nome').ref.on('value',(snapshot) => {
	// 		setNome(snapshot.val())
	// 	})
	// }
	// dados()
	// },[])

	return (
		<Background>
		<Container>
			<Text style={{fontSize:20}}> ola {nome}</Text>

		  <Image
		   source={require('./financeLogo.jpg')}
		   style={{ width: 400, height: 300}}
		   />
		  
		  <AreaInput>
			<Input
			placeholder="Email"
			autoCorrect={false}
			autoCapitalize="none"
			value={email}
			onChangeText={setEmail}
			/>
		  </AreaInput>
  
		  <AreaInput>
			<Input
			placeholder="Senha"
			autoCorrect={false}
			autoCapitalize="none"
			value={password}
			onChangeText={setPassword}
	
			/>
		  </AreaInput>
  
		<SubmitButton
		onPress={handleSubmit}
		>
		  <SubmitText>Acessar</SubmitText>
		</SubmitButton>
  
		<Link onPress = {()=> navigation.navigate('SignUp')} >
		  <LinkText>Criar uma conta!</LinkText>
		</Link>
  
		</Container>
	 </Background>
	)
}