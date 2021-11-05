import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero';
import * as S from './styles';

const SLIDE_DURATION = 7000;

const Hero = () => {
  const [slide, setSlide] = useState({ current: 0, pause: false });

  useEffect(() => {
    if (slide.pause) return;
    const timeout = setTimeout(() => {
      setSlide({
        ...slide,
        current: slide.current === hero.length - 1 ? 0 : slide.current + 1,
      });
    }, SLIDE_DURATION);

    return () => clearTimeout(timeout);
  });

  function resetTimer() {
    setSlide({ ...slide, pause: true });
  }

  function restartTimer() {
    setSlide({ ...slide, pause: false });
  }

  return (
    <S.Wrapper>
      <S.HeroContainer onMouseEnter={resetTimer} onMouseLeave={restartTimer}>
        <Link to="/">
          <S.Image>
            <img
              src={hero[slide.current].image}
              alt={hero[slide.current].title}
            />
          </S.Image>

          <S.Cover>
            <img
              src={hero[slide.current].cover}
              alt={hero[slide.current].title}
            />
          </S.Cover>

          <S.Headline>
            <S.PlayBtn
              type="button"
              variant="icon"
              icon="play_circle_outline"
            />
            <div>
              <S.Title>{hero[slide.current].title}</S.Title>
              <S.Subtitle>{hero[slide.current].subtitle}</S.Subtitle>
            </div>
          </S.Headline>
        </Link>
      </S.HeroContainer>
    </S.Wrapper>
  );
};

export default Hero;
