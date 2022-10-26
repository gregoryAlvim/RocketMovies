import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { Container, Header, Form, Avatar } from './styles';

export function Profile() {

   const { user, updateProfile } = useAuth();
   
   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [oldPassword, setOldPassword] = useState();
   const [newPassword, setNewPassword] = useState();

   const [avatar, setAvatar] = useState(user.avatar);
   const [avatarFile, setAvatarFile] = useState(null);

   async function handleUpdate() {
      
      const user = {
         name,
         email,
         password: newPassword,
         old_password: oldPassword,
      };

      await updateProfile({ user, avatarFile });
   }

   function handleChangeAvatar(event) {
      const file = event.target.files[0];
      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
   }

   return (
      <Container>
         <Header>
            <BackButton />
         </Header>

         <Form>
            <Avatar>
               <img 
                  src={avatar}
                  alt="Foto de perfil do usuário logado no RocketMovies" 
               />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input 
                     id="avatar" 
                     type="file"
                     onChange={handleChangeAvatar}
                  />
               </label>
            </Avatar>

            <Input
               type="text"
               className='inputClass' 
               icon={FiUser} 
               placeholder="Nome"
               value={name}
               onChange={event => setName(event.target.value)}
            />

            <Input
               type="text"
               className='inputClass' 
               icon={FiMail}
               placeholder="E-mail"
               value={email}
               onChange={event => setEmail(event.target.value)}
            />

            <Input
               type="text"
               icon={FiLock} 
               placeholder="Senha atual"
               onChange={event => setOldPassword(event.target.value)}
            />

            <Input
               type="text"
               icon={FiLock} 
               placeholder="Nova senha"
               onChange={event => setNewPassword(event.target.value)}
            />

            <Button 
               title="Salvar"
               onClick={handleUpdate}
            />
         </Form>
      </Container>
   );
}