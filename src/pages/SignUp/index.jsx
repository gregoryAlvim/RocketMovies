import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Form, Background, ButtonText } from './styles';

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleComebackToPreviousPage() {
    navigate(-1);
  }

  function handleRegisterUser() {

    if (!name || !email || !password) {
      alert(" Todos os campos são obrigatórios para criar sua conta! ");
    } else {

    api.post("/users", { name, email, password, })
      .then(() => {
        alert(" O usuário foi cadastrado com sucesso! ");
        handleComebackToPreviousPage();
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      });
    }
  }

  return (
    <Container>
      <Form>
        <h1> RocketMovies </h1>
        <p> Aplicação para acompanhar tudo que assistir. </p>

        <h2> Crie sua conta </h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleRegisterUser}
        />

        <ButtonText
          type="button"
          onClick={handleComebackToPreviousPage}
        >
          Voltar para o login
        </ButtonText>
      </Form>

      <Background />
    </Container>
  );
}