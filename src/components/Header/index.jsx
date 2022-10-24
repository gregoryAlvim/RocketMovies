import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container, Profile } from './styles';


export function Header() {

   const { SignOut } = useAuth();

   function handleSignOut() {
      SignOut();
   }

   return (
      <Container>
         <h1> RocketMovies </h1>

         <Input 
            type='text'
            placeholder='Pesquisar pelo título'
         />
 

         <Profile>
            <div>
               <strong> Grégory Alvim </strong>
               <button
                  onClick={handleSignOut}
               > sair </button>
            </div>

            <Link to="/profile">
               <img src="https://github.com/gregoryAlvim.png" alt="Foto de perfil do usuário logado no RocketMovies" />
            </Link>
         </Profile>
      </Container>
   );
}