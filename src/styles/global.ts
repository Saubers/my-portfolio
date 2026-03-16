import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    /* Modern Enterprise — Dark Mode (default) */
    --bg: #0F172A;
    --surface: #1E293B;
    --surface-hover: #273548;
    --primary: #3B82F6;
    --primary-hover: #2563EB;
    --secondary: #8B5CF6;
    --text: #F1F5F9;
    --text-secondary: #CBD5E1;
    --muted: #64748B;
    --success: #22C55E;
    --error: #EF4444;
    --border: #334155;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3);

    scroll-padding-top: 10rem;

    &.light{
      --bg: #F8FAFC;
      --surface: #FFFFFF;
      --surface-hover: #F1F5F9;
      --primary: #2563EB;
      --primary-hover: #1D4ED8;
      --secondary: #7C3AED;
      --text: #0F172A;
      --text-secondary: #475569;
      --muted: #94A3B8;
      --success: #16A34A;
      --error: #DC2626;
      --border: #E2E8F0;
      --shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);

      body{
        background-color: var(--bg);
        color: var(--text);
      }

      .logo{
        color: var(--text);
      }

      header.header-fixed{
        background-color: rgba(248, 250, 252, 0.8);
        a{
          color: var(--text);
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--text);
        }
        .menu.active{
          background-color: rgba(0, 0, 0, 0);
        }
      }

      footer.footer{
        background-color: var(--surface);
        color: var(--text);
        border-top: 1px solid var(--border);
      }

      form{
        input,textarea{
          border-color: var(--border);
          color: var(--text);
          background-color: var(--surface);
          &::placeholder{
            color: var(--muted);
          }
        }
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg);
    color: var(--text);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body, input, textarea, button{
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: #FFFFFF;
    border-radius: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover{
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }
    &:active{
      transform: translateY(0);
    }
  }

  .logo{
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
    &::first-letter{
      color: var(--primary);
    }
  }

  /* Monospace for tech elements */
  .tech-list li,
  code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

`
