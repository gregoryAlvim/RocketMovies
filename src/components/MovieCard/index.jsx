
import { Container, Title, Card, Description, Tags } from './styles';
import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function MovieCard({ data, ...rest }) {
   return (
      <Container {...rest}>
         <Card>
            <Title>
               {data.title}
            </Title>

            <Rating rating={data.rating} />

            <Description>
               {data.description}
            </Description>

            <Tags>
               {
                  data.tags &&
                  <footer>
                     {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} /> )
                     }
                  </footer>
               }
            </Tags>
         </Card>
      </Container>
   );
}