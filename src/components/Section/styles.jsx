import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #121212;
`;

export const Container = styled.section`
  padding: 2rem 2rem;
  margin: 1rem auto 0;
  overflow: hidden;

  @media (min-width: 1360px) {
    max-width: 1360px;
  }
`;

export const Header = styled.div`
  text-align: left;
  margin: 0 1rem 1rem;
  cursor: pointer;
  border: 1px dashed transparent;

  &:hover {
    & .material-icons {
      color: #f5c518;
    }
  }

  &:active {
    border: 1px dashed #fff;
  }
`;

export const Title = styled.h3`
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 0 0 1rem;

  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 100%;
    left: 0;
    border-radius: 0.25rem;
    background: #f5c518;
  }

  & span {
    vertical-align: middle;
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  padding: 1rem 0 0;
  font-size: 1.15rem;
  opacity: 0.7;
  letter-spacing: 0.05rem;
`;
