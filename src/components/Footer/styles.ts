import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--surface);
  border-top: 1px solid var(--border);
  padding: 3rem 15rem;
  margin-top: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  .logo{
    font-size: 2.4rem;
  }

  p{
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--muted);
    font-size: 1.4rem;
    img{
      width: 2.2rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 2.6rem;
      width: 2.6rem;
      opacity: 0.6;
      transition: opacity 0.2s ease;
      &:hover{
        opacity: 1;
      }
    }
  }

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`
