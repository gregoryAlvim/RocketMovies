import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
`;

export const Back = styled(Link)`
   display: flex;
   align-items: center;
   gap: 0.8rem;

   height: 11.6rem;
   color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
   text-decoration: none;
`;