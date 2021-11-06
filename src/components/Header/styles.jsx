import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #121212;
`;

export const Header = styled.header`
  position: relative;
  min-height: 3.5rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  & .header-logo {
    flex-grow: 1;
    text-align: left;
    margin: auto auto auto 1rem;

    & img {
      vertical-align: middle;
      border-radius: 0.25rem;
    }
  }

  @media (min-width: 1360px) {
    max-width: 1360px;
  }
`;
