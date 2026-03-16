import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);

  .hero-text{
    & > p{
      font-size: 1.8rem;
      color: var(--muted);
    }
    h1{
      font-size: 7rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--text);
    }

    h3{
      color: var(--primary);
      margin: 1rem 0;
      font-weight: 600;
      font-size: 2.4rem;
      font-family: 'JetBrains Mono', monospace;
    }

    p.small-resume {
      margin-bottom: 5rem;
      color: var(--text-secondary);
      font-size: 1.8rem;
      line-height: 1.7;
      max-width: 56rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    font-size: 1.6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`
