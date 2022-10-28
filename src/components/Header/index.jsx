import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

import { Container, Profile } from './styles';

export function Header({onChange}) {

   const { user, SignOut } = useAuth();
   const navigate = useNavigate();

   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avataPlaceholder;

   function handleSignOut() {
      navigate("/");
      SignOut();
   }

   return (
      <Container>
         <h1> RocketMovies </h1>

         <Input 
            type='text'
            placeholder='Pesquisar pelo título'
            onChange={onChange}
         />
 

         <Profile>
            <div>
               <strong>{user.name}</strong>
               <button
                  onClick={handleSignOut}
               > sair </button>
            </div>

            <Link to="/profile">
               <img src={avatarURL} alt="Foto de perfil do usuário logado no RocketMovies" />
            </Link>
         </Profile>
      </Container>
   );
}