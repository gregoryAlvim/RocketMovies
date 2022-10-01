import styled from 'styled-components';

export const Container = styled.div` 
   color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

   > main {
      margin: 0 12.3rem;
   }
`;

export const Form = styled.form`
   height: 65vh;
   overflow-y: scroll;
   padding-right: 10px;
`;

export const Title = styled.h1`
   font-weight: 500;
   font-size: 3.6rem;

   line-height: 4.7rem;

   margin-bottom: 4rem;
`;

export const BoxInputs = styled.div` 
   display: flex;
   gap: 2.5rem;

   margin-bottom: 2.5rem;
`;

export const Textarea = styled.textarea` 
   background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
   color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

   width: 100%;
   padding: 1.2rem;

   resize:none;
   border: none;
   border-radius: 1rem;

   margin-bottom: 4rem;
   

   &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY_200};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
   }
`;

export const Subtitle = styled.span`
   color: ${({ theme }) => theme.COLORS.TEXT_GRAY_400};
   
   font-size: 2rem;
   line-height: 2.6rem;
`;

export const BoxTags = styled.div`
   display: flex;
   background-color: ${({ theme }) => theme.COLORS.BG_GRAY_500};

   border-radius: 1rem;
   margin-top: 2.4rem;

   padding: 1.6rem;
   gap: 0.8rem;
`;

export const BoxOptions = styled.div`
   display: flex;

   gap: 2.5rem;

   .deleteMovie {
      background-color: ${({ theme }) => theme.COLORS.BG_GRAY_500};
      color: ${({ theme }) => theme.COLORS.TEXT_ROSE};
   }

   .saveMovieChanges {
      background-color: ${({ theme }) => theme.COLORS.BG_ROSE};
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY_300};
   }
`;

