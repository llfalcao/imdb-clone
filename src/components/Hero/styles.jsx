import styled from 'styled-components';
import Button from '../Button';

export const Wrapper = styled.div`
  @media (min-width: 1360px) {
    max-width: 1360px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  background: #000;
  margin: 1rem 0 0;
  max-width: 850px;
  height: auto;
  padding: 0rem 3rem 3rem;
  text-align: left;
`;

export const Image = styled.div`
  height: auto;

  & img {
    width: 100%;
    object-fit: contain;
    object-position: top;
    mask-image: linear-gradient(to top, transparent, black 70%);
  }
`;

export const Headline = styled.div`
  position: absolute;
  left: 9rem;
  bottom: 0.3rem;
  margin: 0 3rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: start;

  @media (min-width: 500px) {
    flex-direction: row;
    left: 14rem;
  }

  @media (min-width: 1280px) {
    left: 19rem;
    margin: 0 4rem 0.5rem 1rem;
  }
`;

export const PlayBtn = styled(Button)`
  margin: 0;
  padding: 0;
  transform: translateX(-4px);

  &:hover {
    background: none;
    transition: none;
  }

  & .material-icons {
    font-size: 3rem;

    &:hover {
      color: #f5c518;
    }
  }

  @media (min-width: 500px) {
    & .material-icons {
      font-size: 5rem;
    }
  }

  @media (min-width: 1360px) {
    & .material-icons {
      font-size: 7rem;
    }
  }
`;

export const Cover = styled.div`
  position: absolute;
  left: 3.5rem;
  bottom: 0.5rem;
  width: 70px;
  height: auto;

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 500px) {
    width: 120px;
    left: 4.5rem;
  }

  @media (min-width: 1360px) {
    width: 180px;
  }
`;

export const Legend = styled.div``;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;

  @media (min-width: 500px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1360px) {
    font-size: 2.3rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;

  @media (min-width: 500px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1360px) {
    font-size: 1.7rem;
  }
`;
