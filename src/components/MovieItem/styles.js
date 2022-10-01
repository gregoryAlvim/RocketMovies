import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   background-color: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_SECONDARY };
   color: ${ ({ theme }) => theme.COLORS.TEXT_WHITE };
   border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.BG_GRAY_200 }` : "none" };
   border-radius: 1rem;
   padding-right: 1.6rem;
   > button {
      border: none;
      background: none;
   }

   .button-delete {
      color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
   }

   .button-add {
      color: ${ ({ theme }) => theme.COLORS.BG_ROSE };
   }

   > input {
      height: 5.6rem;
      width: ${ ({ isNew }) => isNew ? '18rem' : '12rem' };
      padding: 1.2rem;
      color: ${ ({ theme }) => theme.COLORS.TEXT_WHITE };
      background: transparent;
      border: none;
      &::placeholder {
         color: ${ ({ theme }) => theme.COLORS.BG_GRAY_200 };
      }
   }
`;