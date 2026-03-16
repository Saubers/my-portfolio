import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: grid;
  place-items: center;

  h2{
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text);
  }

  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.2rem;
    width: 100%;

    input, textarea{
      width: 60rem;
      padding: 1.2rem 2rem;
      border-radius: 0.8rem;
      outline: none;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text);
      font-weight: 500;
      font-size: 1.5rem;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;

      &::placeholder{
        color: var(--muted);
      }

      &:focus{
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: vertical;
    }

    button{
      padding: 1.2rem 6rem;
      text-transform: uppercase;
      font-size: 1.4rem;
      margin-top: 0.8rem;
    }
  }

  @media (max-width: 740px){
    form{
      width: 100%;

      input,textarea{
        width: 100%;
      }
    }
  }
`
