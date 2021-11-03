import { useState, useEffect } from 'react';
import hero from '../../assets/hero';
import * as S from './styles';

const SLIDE_DURATION = 7000;

const Hero = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide((slide) => (slide === hero.length - 1 ? 0 : slide + 1));
    }, SLIDE_DURATION);

    return () => clearTimeout(timeout);
  });

  return (
    <S.HeroContainer>
      <S.Image src={hero[slide].image} alt={hero[slide].title} />
      <S.Legend>
        <S.Title>{hero[slide].title}</S.Title>
        <S.Subtitle>{hero[slide].subtitle}</S.Subtitle>
      </S.Legend>
    </S.HeroContainer>
  );
};

export default Hero;
