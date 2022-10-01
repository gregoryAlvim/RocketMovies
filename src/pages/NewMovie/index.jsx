import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

import { Container, Title, Form, BoxInputs, Textarea, Subtitle, BoxTags, BoxOptions } from './styles';

export function NewMovie() {
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
                  />

                  <Input
                     className="inputNumber"
                     placeholder="Sua avaliação ( De 0 a 5 )"
                     type="number"
                  />
               </BoxInputs>

               <Textarea placeholder="Observações" cols="30" rows="10" />

               <Subtitle> Marcadores </Subtitle>

               <BoxTags>
                  <MovieItem
                     value="Terror"
                  />
                  <MovieItem
                     isNew={true} placeholder="Novo tag" 
                  />
               </BoxTags>

               <BoxOptions>
                  <Button 
                     title="Excluir filme"
                     className="deleteMovie"
                  />   
                  <Button 
                     title="Salvar alterações"
                     className="saveMovieChanges"
                  />
               </BoxOptions>
            </Form>
         </main>

      </Container>
   );
}