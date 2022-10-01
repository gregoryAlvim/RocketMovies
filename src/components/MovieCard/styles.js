import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Card = styled.div`
   height: 22.2rem;
   background: ${({ theme }) => theme.COLORS.BG_ROSE_5};
   border-radius: 1.6rem;

   padding: 3.2rem;
   margin-right: 8px;
   
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

export const Title = styled.h2`
   color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

   font-weight: 700;
   font-size: 2.4rem;
   line-height: 3.2rem;
`;

export const Description = styled.p`
   color: ${({ theme }) => theme.COLORS.TEXT_GRAY_400};

   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
           line-clamp: 2; 
   -webkit-box-orient: vertical;

   font-size: 1.6rem;
   line-height: 1.9rem;
`;

export const Tags = styled.div`
   margin-top: 2rem;
`;

