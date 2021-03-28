import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 1rem;
`;

export const Controller = styled.div`
  width: 100%;
  height: 4.44rem;

  background: var(--gray-20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9.4rem;
  margin-bottom: 2rem;

  button {
    background: none;
    border: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Carousel = styled.div`
  height: 24.6rem;
`;
