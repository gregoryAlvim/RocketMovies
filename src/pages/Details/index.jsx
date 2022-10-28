import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

import { MdOutlineWatchLater } from 'react-icons/md';
import { Container, Content, BoxTitleAndRating, Title, BoxCreatedAt, Registered, Tags, Description } from './styles';

export function Details() {

   const { user } = useAuth();

   const params = useParams();
   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avataPlaceholder;


   const [movie, setMovie] = useState(null);

   useEffect(() => {
      async function fetchMovie() {
         const response = await api.get(`movie-notes/${params.id}`);
         setMovie(response.data);
      }

      fetchMovie();

   }, []);

   return (
      <Container>
         <Header />

         <Content>
            <BackButton className='BackButtonDetails' />

            {
               movie && 
               <main>
                  <BoxTitleAndRating>
                     <Title> {movie.title} </Title>

                     <Rating className="detailsRating" rating={4} />
                  </BoxTitleAndRating>

                  <BoxCreatedAt>
                     <Registered>
                        <img src={avatarURL} alt="Foto de perfil do usuário logado no RocketMovies" />

                        Por {user.name}
                     </Registered>

                     <Registered>
                        <MdOutlineWatchLater size={25} />

                        {movie.created_at}
                     </Registered>
                  </BoxCreatedAt>
                  <Tags>
                     {
                        movie.tags &&
                        <footer>
                           {
                              movie.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                           }
                        </footer>
                     }
                  </Tags>

                  <Description>
                     {movie.description}
                  </Description>
               </main>
            }
         </Content>
      </Container>
   );
}