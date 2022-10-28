import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

import { FiPlus } from 'react-icons/fi';
import { Container, MyMovies, AddMovies, Movies } from './styles';

export function Home() {

   const navigate = useNavigate();

   const [search, setSearch] = useState("");
   const [movies, setMovies] = useState([]);

   useEffect(() => {

      async function fetchMovies() {
         try {

            const response = await api.get(`movie-notes?title=${search}`);
            setMovies(response.data);

         } catch (error) {

            if (error.response) {
               alert(error.response.data.message);
            } else {
               alert(" Algo deu errado ao buscar as notas dos filmes! ");
            }
         }
      }

      fetchMovies();

   }, [search]);

   function handleDetails(id) {
      navigate(`detail-movie/${id}`);
   }

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
               movies.map(movie => (
                  <MovieCard
                     id="FirstMovieCard"
                     key={String(movie.id)}
                     onClick={() => handleDetails(movie.id)}
                     data={movie}
                  />
               ))
            }
         </Movies>
      </Container>
   );
}