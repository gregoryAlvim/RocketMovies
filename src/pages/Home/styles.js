import styled from "styled-components";

export const Container = styled.div`

`;

export const MyMovies = styled.div`

   padding: 0 12.3rem;
   margin-top: 4.5rem;

   display: flex; 
   align-items: center;
   justify-content: space-between;

   grid-area: menu;

   h1 {
      color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
      white-space: nowrap;
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
   } 
`;

export const AddMovies = styled.div`
   width: 20.7rem;
`;

export const Movies = styled.div`
   overflow-y: auto;
   
   margin: 3rem 12.3rem 0;
   height: 60vh;
   
   display: flex;
   flex-direction: column;
   gap: 2.4rem;
`;