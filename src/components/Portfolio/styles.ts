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
      padding: 2.4rem 2.4rem;
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
        gap: 1.2rem;
        margin-bottom: 1.6rem;

        .icon-badge{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          flex-shrink: 0;
          border-radius: 0.8rem;
          background-color: var(--surface-hover);
          color: var(--primary);
        }
      }

      h3{
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text);
        line-height: 1.3;
      }

      .description{
        letter-spacing: 0.01rem;
        margin-bottom: 1.6rem;
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 1.5rem;
      }

      .achievements{
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        li{
          position: relative;
          padding-left: 1.6rem;
          color: var(--text-secondary);
          font-size: 1.4rem;
          line-height: 1.5;

          &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0.65rem;
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
            background-color: var(--primary);
          }
        }
      }

      .tech-list{
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        margin-top: auto;
        margin-bottom: 2rem;

        li{
          padding: 0.4rem 1.2rem;
          border-radius: 100px;
          background-color: var(--surface-hover);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1.2rem;
          font-weight: 500;
        }
      }

      footer.actions{
        display: flex;
        gap: 1.2rem;
        padding-top: 1.6rem;
        border-top: 1px solid var(--border);

        .action{
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.4rem;
          border-radius: 0.8rem;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1.3rem;
          font-weight: 500;
          background: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

          &:hover{
            color: var(--primary);
            border-color: var(--primary);
            transform: translateY(-2px);
          }

          &.disabled{
            opacity: 0.5;
            cursor: not-allowed;
            pointer-events: none;
          }
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
