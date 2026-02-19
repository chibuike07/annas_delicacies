import styled from "styled-components";

export const FooterSection = styled.footer`
  text-align: center;
  color: var(--highlight);
  font-size: 0.95rem;
  padding-bottom: 1.5rem;
  background: var(--surface);
  border-top: 2px solid var(--accent);

  .footer_icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    color: var(--brand);
    font-weight: 600;
  }

  .footer_note {
    margin-top: 0.5rem;
    color: var(--muted);
  }
`;
