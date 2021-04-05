import styled from "styled-components";

export const Container = styled.section`
  /* width: 78.7rem; */
  margin: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  article {
    display: inherit;

    img {
      height: 13.25rem;
      width: 17.25rem;
      background-color: #ccc;
      border-radius: 0.5rem;
      border: 2px solid #ffe732;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  header {
    padding-top: 1.5rem;

    a {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.22rem;
      margin-left: 1.25rem;

      &:hover {
        color: var(--home-main);
      }
    }
    p {
      width: 17.94rem;
      height: 12.19rem;
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  span,
  p {
    padding: 0.3rem 1.44rem;
  }
`;
