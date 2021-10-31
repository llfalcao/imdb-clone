import styled from 'styled-components';

export const Carousel = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  transition: 0.5s ease-in-out;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 25%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 0;
  border: 1px solid rgb(255, 255, 255, 0.7);
  border-radius: 0.25rem;

  &:hover {
    color: #f5c518;
  }

  & .material-icons {
    font-size: 3.5rem;
  }
`;

export const ArrowLeft = styled(Arrow)`
  left: 0;
`;

export const ArrowRight = styled(Arrow)`
  right: 0;
`;

export const LoadingError = styled.p`
  padding: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
`;
