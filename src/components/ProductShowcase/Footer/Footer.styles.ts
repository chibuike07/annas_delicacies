import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  padding-bottom: 1rem;

  .footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .footer-note {
    margin-top: 0.5rem;
  }
`;
