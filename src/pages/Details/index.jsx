import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

import { usersData } from '../../utils/users';
import { data } from '../../utils/datas';

import { MdOutlineWatchLater } from 'react-icons/md';
import { Container, Content, BoxTitleAndRating, Title, BoxCreatedAt, Registered, Tags, Description } from './styles';

export function Details() {
   return (
      <Container>
         <Header />
         <Content>
               <BackButton className='BackButtonDetails' />
            <main>



               <BoxTitleAndRating>
                  <Title> {data.movie.title} </Title>

                  <Rating className="detailsRating" rating={4} />
               </BoxTitleAndRating>

               <BoxCreatedAt>
                  <Registered>
                     <img src="https://github.com/gregoryAlvim.png" alt="Foto de perfil do usuário logado no RocketMovies" />

                     Por {usersData.user1.name}
                  </Registered>

                  <Registered>
                     <MdOutlineWatchLater size={25} />

                     23/05/22 às 08:00
                  </Registered>
               </BoxCreatedAt>
               <Tags>
                  {
                     data.movie.tags &&
                     <footer>
                        {
                           data.movie.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                        }
                     </footer>
                  }
               </Tags>

               <Description>
                  {data.movie.description}
                  <br /><br />
                  {data.movie.description}
               </Description>
            </main>
         </Content>
      </Container>
   );
}