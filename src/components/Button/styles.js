import styled from 'styled-components';

export const Container = styled.button`
   width: 100%;
   height: 5.6rem;

   font-weight: 500;
   line-height: 2.1rem;

   border-radius: 1rem;
   border: 0;

   margin-top: 2.4rem;

   background-color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
   color: ${ ({ theme }) => theme.COLORS.TEXT_GRAY_300 }


   &:disabled {
      opacity: 0.5;
   }

`