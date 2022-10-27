import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

import { Container, Title, Form, BoxInputs, Textarea, Subtitle, BoxTags, BoxOptions } from './styles';

export function NewMovie() {

   const [tags, setTags] = useState([]);
   const [newTag, setNewTag] = useState("");

   const [title, setTitle] = useState("");
   const [rating, setRating] = useState("");
   const [description, setDescription] = useState("");

   const navigate = useNavigate();

   function handleComebackToPreviousPage() {
      navigate(-1);
    }

   function handleAddTag() {
      setTags( prevState => [...prevState, newTag] );
      setNewTag("");
   }

   function handleRemoveTag(deleteTag) {
      const tagsFiltered = tags.filter( tag => tag !== deleteTag );
      setTags(tagsFiltered);
   }

   async function handleCreateMovie() {
      
      if ( !title || !rating || !description ) {
         return alert(" Por favor, preencha todos os campos! ");
      }

      if ( newTag ) {
         return alert(" Algum marcador não foi adicionado! ");
      }
      
      await api.post("movie-notes", {
         title,
         rating,
         description,
         tags
      })
         
      alert(" Nota do filme cadastrada com sucesso! ");
      handleComebackToPreviousPage();
      
   }

   return (
      <Container>

         <Header />

         <main>
            <BackButton />

            <Form>
               <Title> Novo Filme </Title>

               <BoxInputs>
                  <Input
                     placeholder="Título"
                     type="text"
                     onChange={event => setTitle(event.target.value)}
                  />

                  <Input
                     className="inputNumber"
                     placeholder="Sua avaliação ( De 0 a 5 )"
                     type="number"
                     onChange={event => setRating(event.target.value)}
                  />
               </BoxInputs>

               <Textarea 
                  placeholder="Observações" 
                  cols="30" 
                  rows="10" 
                  onChange={event => setDescription(event.target.value)}
               />

               <Subtitle> Marcadores </Subtitle>

               <BoxTags>
                  {
                     tags.map((tag, index) => (
                        <MovieItem
                           key={String(index)}
                           value={tag}
                           onClick={event => handleRemoveTag(tag)}
                        />
                     ))
                  }
                  <MovieItem
                     isNew
                     placeholder="Adicionar tag"
                     onChange={event => setNewTag( event.target.value )}
                     value={newTag}
                     onClick={handleAddTag}
                  />
               </BoxTags>

               <BoxOptions>
                  <Button 
                     title="Excluir filme"
                     className="deleteMovie"
                  />   
                  <Button 
                     title="Salvar filme"
                     className="saveMovieChanges"
                     onClick={handleCreateMovie}
                  />
               </BoxOptions>
            </Form>
         </main>

      </Container>
   );
}