import styled from "styled-components";
import backgroundImg from '../../assets/background-login.png';

export const Container = styled.div`
   height: 100vh;

   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`

   padding: 0 12rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   
   > h1 {
      color: ${ ({theme}) => theme.COLORS.BG_ROSE };
      font-weight: 700;
      font-size: 4.8rem;
      line-height: 6.3rem;
   }

   > h2 {
      color: ${ ({theme}) => theme.COLORS.TEXT_WHITE };
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin: 4.8rem 0;
   }

   > p {
      color: ${ ({theme}) => theme.COLORS.TEXT_GRAY_100 };
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
   }

   > a {
      margin-top: 4.2rem;
      color: ${ ({ theme }) => theme.COLORS.TEXT_ROSE };
      display: flex;
      justify-content: center;
   }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
`;