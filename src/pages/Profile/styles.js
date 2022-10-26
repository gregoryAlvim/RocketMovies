import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
`;

export const Header = styled.header`
   height: 11.6rem;
   background-color: ${ ({ theme }) => theme.COLORS.BG_ROSE_5 };
   padding: 0 12.3rem;
`;

export const Form = styled.form`
   max-width: 34rem;
   
   display: flex;
   flex-direction: column;

   margin: 0 auto;

   > div:nth-child(4) {
      margin-top: 2.4rem;
   }

   .inputClass {
      color: ${ ({ theme }) => theme.COLORS.TEXT_WHITE};
   }
`;

export const Avatar = styled.div`
   
   position: relative;
   margin: -8.4rem auto 3.2rem;
   
   > img {
      width: 18.6rem;
      height: 18.6rem;
      border-radius: 50%;
   }

   > label {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      background-color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
      
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;

      cursor: pointer;
      
      input {
         display: none;
      }
      
      svg {
         width: 1.8rem;
         height: 1.8rem;
         color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };
      }
   }
`;