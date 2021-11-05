import styled from 'styled-components';
import Button from '../Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem;

  @media (min-width: 1000px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1360px) {
    max-width: 1360px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  background: #000;
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
  padding: 0rem 0 3rem;
  text-align: left;
  flex-grow: 1;
`;

export const Image = styled.div`
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: bottom;
    mask-image: linear-gradient(
      to top,
      transparent,
      transparent 10%,
      black 90%,
      black 100%
    );
  }
`;

export const Cover = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 0.5rem;
  width: 70px;
  height: auto;

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 500px) {
    width: 120px;
    left: 1.5rem;
  }

  @media (min-width: 1360px) {
    width: 150px;
    left: 1.5rem;
  }
`;

export const Headline = styled.div`
  position: absolute;
  left: 6rem;
  bottom: 0.3rem;
  margin: 0 3rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: start;

  @media (min-width: 500px) {
    flex-direction: row;
    left: 11rem;
  }

  @media (min-width: 1280px) {
    left: 12rem;
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

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;

  @media (min-width: 500px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1360px) {
    font-size: 2rem;
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
    font-size: 1.6rem;
  }
`;

export const VerticalNews = styled.div`
  display: inline-block;
  text-align: left;
  margin: 1rem 2rem 0 0;

  & span {
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #f5c518;
  }

  & img {
    width: 75px;
    vertical-align: top;
    margin: 0;
  }
`;

export const NewsBlock = styled.div`
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
`;

export const Legend = styled.div`
  padding: 1rem;
  display: inline-block;
  margin: 0;

  & p {
    display: block;
    font-size: 1.2rem;
  }

  & p:last-child {
    opacity: 0.7;
  }
`;
