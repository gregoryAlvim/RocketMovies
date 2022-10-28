import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

import { FiX } from 'react-icons/fi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { Container, Content, BoxTitleAndRating, Title, BoxCreatedAt, Registered, Tags, Description } from './styles';

export function Details() {

   const { user } = useAuth();
   const navigate = useNavigate();

   const params = useParams();
   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avataPlaceholder;

   const [movie, setMovie] = useState(null);

   function handleComebackToPreviousPage() {
      navigate(-1);
   }

   async function handleDeleteMovie() {
      const response = await api.delete(`movie-notes/${params.id}`);
      alert( response.data.message );
      handleComebackToPreviousPage();
   }

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
            <div className="divButtons">
               <BackButton className='BackButtonDetails' />
               <Button 
                  icon={FiX}
                  onClick={handleDeleteMovie}
               />
            </div>

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