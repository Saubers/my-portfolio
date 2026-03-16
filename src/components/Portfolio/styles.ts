import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 10rem;
    color: var(--text);
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2.4rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2.4rem 2rem;
      background-color: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1.2rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text);
      box-shadow: var(--shadow);

      &:hover{
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }

      h3{
        margin-bottom: 1.2rem;
        font-size: 2rem;
        font-weight: 600;
        color: var(--text);
      }

      p{
        letter-spacing: 0.01rem;
        margin-bottom: 2rem;
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 1.5rem;
        a{
          color: var(--primary);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
          &:hover{
            border-color: var(--primary);
          }
        }
      }

      footer{
        margin-top: auto;
        padding-top: 1.6rem;
        border-top: 1px solid var(--border);
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.2rem;
          color: var(--muted);
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`
