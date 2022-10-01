import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  gap: 0.5rem;

  > span {
    color: ${({ theme }) => theme.COLORS.BG_ROSE};

    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;