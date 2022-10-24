import styled from 'styled-components';

export const Container = styled.header`
   width: 100%;
   height: 11.6rem;
   padding: 0 12.3rem;

   font-size: 1.4rem;

   display: flex;
   align-items: center;
   justify-content: space-around;
   gap: 6.4rem;

   grid-area: header;

   background-color: ${ ({ theme }) => theme.COLORS.BG_PRIMARY };

   border-bottom-width: 0.1rem;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_LINE };

   > h1 {
      color: ${ ({theme}) => theme.COLORS.BG_ROSE };
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.2rem;
   }
`;

export const Profile = styled.div`

   display: flex;
   align-items: center;

   text-align: end;

   > div {
      display: flex;
      flex-direction: column;

      line-height: 1.8rem;

      strong {
         color: ${ ({theme}) => theme.COLORS.TEXT_WHITE };
         font-weight: 700;
         white-space: nowrap;
      }

      button {
         color: ${ ({theme}) => theme.COLORS.TEXT_GRAY_200 };
         font-weight: 400;
         background: none;
         border: none;
         text-align: end;
      }
   }

   > a {
      img {
         width: 64px;
         height: 64px;
         border-radius: 50%;
         margin-left: 0.9rem;
      }
   }
`;
