import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  background: #000 !;
  margin: 1rem 0 0;
  padding: 0rem 3rem 3rem;
  max-width: 850px;
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
  mask-image: linear-gradient(to top, transparent, black 70%);
`;

export const Legend = styled.div`
  position: absolute;
  bottom: 0;
  margin-right: 3rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
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
    font-size: 1.5rem;
  }
`;
