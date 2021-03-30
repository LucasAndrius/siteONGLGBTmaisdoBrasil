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

export const Label = styled.h4`
  line-height: 2.4rem;
  text-align: center;
`;

export const Link = styled.button`
  text-align: center;
  color: var(--newsletter-action);
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 2.4rem;
  margin: 2rem 0 3rem 0;
  background: none;
  border: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
