import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text);
    }
    p {
      color: var(--text-secondary);
      font-weight: 500;
      margin-top: 0.8rem;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    margin-top: 8rem;
    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      width: 100%;
      max-width: 40rem;
      background-color: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1.2rem;
      padding: 1.6rem 2.8rem;
      box-shadow: var(--shadow);
      color: var(--text);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;
      img {
        width: 4rem;
        flex-shrink: 0;
      }
      a {
        color: var(--text);
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1;
      }
      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary);
        a {
          color: var(--primary);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;
