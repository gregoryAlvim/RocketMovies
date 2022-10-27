import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

import { FiPlus } from 'react-icons/fi';
import { Container, MyMovies, AddMovies, Movies } from './styles';

export function Home() {

   const [search, setSearch] = useState("");
   const [movies, setMovies] = useState("");

   useEffect(() => {
      async function fetchMovies() {
         const response = await api.get("movie-notes");
         console.log(response.data);
         setMovies(response.data);
      }

      fetchMovies();
   }, []);

   return (
      <Container>

         <Header
            onChange={event => setSearch(event.target.value)}
         />

         <MyMovies>
            <h1> Meus Filmes </h1>

            <Link to="create-new-movie">
               <AddMovies>
                  <Button
                     type="button"
                     title="Adicionar filme"
                     icon={FiPlus}
                  />
               </AddMovies>
            </Link>
         </MyMovies>

         <Movies>
            {
               <Link to="detailMovie/1">
                  <MovieCard key={1} id="FirstMovieCard" data={{
                     title: 'The spider man',

                     ratingStars: 4,
                     description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ',
                     tags: [
                        { id: '1', name: 'Drama' },
                        { id: '2', name: 'Ação' },
                        { id: '3', name: 'Super-Herói' },
                     ]
                  }} />
               </Link>
            }
         </Movies>
      </Container>
   );
}