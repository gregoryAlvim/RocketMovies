
import { Container, Title, Card, Description, Tags } from './styles';
import { Rating } from '../Rating';
import { Tag } from '../Tag';

import { FiStar } from 'react-icons/fi';
import {theme} from '../../styles/theme';


export function MovieCard({ data, ...rest }) {
   return (
      <Container {...rest}>
         <Card>
            <Title>
               {data.title}
            </Title>

            <Rating rating={data.ratingStars} />

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