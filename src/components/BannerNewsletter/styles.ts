import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 65px;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.noticias {
    background: var(--home-main);
  }

  &.agenda {
    background: var(--agenda-main);
    a {
      color: #fff;
    }
  }

  &.tv {
    background: var(--tv-main);
    a {
      color: #fff;
    }
  }

  &.marketplace {
    background: var(--marketplace-main);
    a {
      color: #fff;
    }
  }

  &.radio {
    background: var(--radio-main);
    a {
      color: #fff;
    }
  }

  &.podcast {
    background: var(--podcast-main);
    a {
      color: #fff;
    }
  }

  a {
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-transform: uppercase;
  }
`;
