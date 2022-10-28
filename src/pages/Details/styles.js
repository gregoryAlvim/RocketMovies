import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   grid-template-rows: auto;
   grid-template-areas: 
   "header"
   "content";

   color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
`;

export const Content = styled.div`  
   
   margin: 0 12.3rem;
   grid-area: content;
   
   main {
      height: 60vh;
      overflow-y: auto;
   }
   
   .divButtons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
         background: none;
         padding: 0;
         margin: 0;
         width: 2rem;
         color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
      }
   }
`;

export const BoxTitleAndRating = styled.div`
   display: flex;
   align-items: center;
   gap: 1.9rem;

   .detailsRating {
      svg {
         width: 2rem;
         height: 2rem;
      }
   }
`;

export const Title = styled.h1`
   text-transform: uppercase;

   font-weight: 500;
   font-size: 3.6rem;
   line-height: 4.7rem;
`;

export const BoxCreatedAt = styled.div`
   display: flex;
   align-items: center;
   gap: 1.9rem;

   margin-top: 2.4rem;
`;

export const Registered = styled.span`
   display: flex;
   align-items: center;

   gap: 1.3rem;

   font-size: 1.6rem;
   line-height: 1.9rem;

   img {
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
   }

   svg {
      fill: ${({ theme }) => theme.COLORS.BG_ROSE};
   }
`;

export const Tags = styled.div`
   margin: 4rem 0;
`;

export const Description = styled.p`
   font-size: 1.6rem;
   line-height: 2.1rem;
   text-align: justify;

   margin-bottom: 1rem;
   margin-right: 8px;
`;
