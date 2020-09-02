import { createGlobalStyle } from 'styled-components';

export const PostStyles = createGlobalStyle`
  p {
    margin-bottom: 0.8rem;
  }

  blockquote {
    border-left: 5px solid var(--white);
    border-radius: 2px;
    margin: 2.4rem 0 2.4rem 0.8rem;
    padding: 0.8rem;
    background-color: var(--whiteTrans);
    box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.06);
    font-style: italic;
  }

  ol {
    margin-left: 1.6rem;
    margin-bottom: 2.4rem;
  }

  li {
    margin-left: 0.4rem;
    margin-bottom: 0.4rem;
  }
`;
