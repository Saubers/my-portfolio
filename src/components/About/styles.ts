import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    border-radius: 0.8rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--surface);
    }

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    border-bottom: 0.3rem solid var(--primary);
    padding-bottom: 0.8rem;
  }

  h3 {
    margin-top: 2rem;
    color: var(--primary);
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--text-secondary);
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 100%;
      border-radius: 1.2rem;
      filter: grayscale(1);
      transition: filter 0.5s ease;
      border: 1px solid var(--border);

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
    }

    .hard-skills {
      justify-content: center;
    }
  }
`;
