import styled from "styled-components";

export const Container = styled.section`
  width: 75.8rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

export const Logos = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 16.93rem;
    height: 9.62rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
