import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { Container, Header, Form, Avatar } from './styles';

import { usersData } from '../../utils/users';

export function Profile() {
   return (
      <Container>
         <Header>
            <BackButton />
         </Header>

         <Form>
            <Avatar>
               <img src="https://github.com/gregoryAlvim.png" alt="Foto de perfil do usuário logado no RocketMovies" />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input 
                     id="avatar" 
                     type="file"
                  />
               </label>
            </Avatar>

            <Input className='inputClass' icon={FiUser} placeholder={usersData.user1.name ? usersData.user1.name : "Nome"} />
            <Input className='inputClass' icon={FiMail} placeholder={usersData.user1.email ? usersData.user1.email : "E-mail"} />

            <Input icon={FiLock} placeholder="Senha atual" />
            <Input icon={FiLock} placeholder="Nova senha" />

            <Button title="Salvar" />
         </Form>
      </Container>
   );
}