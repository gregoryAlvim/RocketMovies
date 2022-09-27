import { Input } from '../Input';

import { Container, Profile } from './styles';

export function Header() {
   return (
      <Container>
         <h1> RocketMovies </h1>

         <Input 
            type='text'
            placeholder='Pesquisar pelo título'
         />

         <Profile to="/profile">
            <div>
               <strong> Grégory Alvim </strong>
               <span>sair</span>
            </div>

            <img src="https://github.com/gregoryAlvim.png" alt="Foto de perfil do usuário logado no RocketMovies" />
         </Profile>
      </Container>
   );
}