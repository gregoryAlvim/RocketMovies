import styled from 'styled-components';

export const Container = styled.span`
   font-size: 1.2rem;
   line-height: 1.4rem;

   background: ${({ theme }) => theme.COLORS.BG_GRAY_300};
   color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
   padding: 0.5rem 1.6rem;

   border-radius: 0.8rem;
   margin-right: 0.8rem;
`;