import { FiArrowLeft } from "react-icons/fi";

import { Container, Back } from './styles';

export function BackButton({ ...rest }) {
   return (
      <Container {...rest}>
         <Back to="/">
               <FiArrowLeft />
               Voltar
         </Back>
      </Container>
   );
}