import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

   margin-bottom: 0.8rem;
   border-radius: 1rem;

   > input {
      height: 5.6rem;
      width: 100%;
      padding: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
      background: transparent;
      border: 0;

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.TEXT_GRAY_200};
         font-weight: 400;
         font-size: 1.6rem;
         line-height: 2.1rem;
      } 
   }

   > svg {
      margin-left: 1.6rem;
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY_200};
   }
`