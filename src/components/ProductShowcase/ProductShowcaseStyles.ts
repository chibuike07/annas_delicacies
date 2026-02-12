import styled from "styled-components";

// Main page styled component
export const Page = styled.main`
  min-width: 300px;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* CATEGORIES SECTION */
  .categories {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .category_section {
      .section_header {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-bottom: 0.75rem;

        h2 {
          font-size: 1.6rem;
        }

        .subtitle {
          color: var(--muted);
          font-size: 0.95rem;
        }
      }

      .cards_grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }

      .load_more_row {
        display: flex;
        justify-content: center;
        margin-top: 0.9rem;

        button {
          border: 1px solid var(--border);
          background: #fff;
          color: var(--text);
          border-radius: 999px;
          padding: 0.65rem 1.4rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            border 0.2s ease,
            transform 0.2s ease;

          &:hover {
            border-color: var(--brand);
            transform: translateY(-1px);
          }
        }
      }
    }
  }

  /* STORY SECTIONS */
  .story_sections {
    display: grid;
    gap: 1.75rem;
  }

  .story_section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;

    .story_content {
      display: grid;
      gap: 0.75rem;

      h3 {
        font-size: 1.4rem;
      }

      p {
        color: var(--muted);
        font-size: 0.98rem;
      }

      .story_badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: rgba(249, 115, 22, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
        font-size: 0.78rem;
        width: fit-content;
      }
    }

    .story_media {
      background: linear-gradient(135deg, var(--accent-soft), #fff7ed);
      border-radius: 16px;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .story_media img {
      width: min(100%, 420px);
      height: auto;
      border-radius: 12px;
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
    }
  }
`;
