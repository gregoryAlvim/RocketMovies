import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Container>
      <Form>
        <h1> RocketMovies </h1>
        <p> Aplicação para acompanhar tudo que assistir. </p>

        <h2> Faça seu login </h2>

        <Input 
          type="text"
          placeholder="E-mail" 
          icon={FiMail}
          onChange={ event => setEmail(event.target.value) }
        />
        
        <Input 
          type="password"
          placeholder="Senha" 
          icon={FiLock} 
          onChange={ event => setPassword(event.target.value) }
        />

        <Button title="Entrar" />

        <Link to="/create-account">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}