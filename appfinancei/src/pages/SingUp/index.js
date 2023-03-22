import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton,SubmitText, Link, LinkText} from './styles';

export default function SignUp() {
	const[name, setName] = useState('')
	const[email, setEmail] = useState('')
	const[password, setPassword] = useState('')

	return (
		<Background>
		<Container>
		  {/* <Image
		   source={require('./financeLogo.jpg')}
		   style={{ width: 400, height: 300}}
		   /> */}
		     <AreaInput>
			<Input
			placeholder="nome"
			autoCorrect={false}
			autoCapitalize="none"
			value={name}
			onChangeText={setName}
			/>
		  </AreaInput>
		  
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
  
		<SubmitButton>
		  <SubmitText>Cadastrar</SubmitText>
		</SubmitButton>

  
		</Container>
	 </Background>
	)
}