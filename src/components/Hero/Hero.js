import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero';
import * as S from './styles';

const SLIDE_DURATION = 80000;

const Hero = () => {
  const [slide, setSlide] = useState({ current: 0, pause: false });
  const [upNext, setUpNext] = useState([1, 2, 3]);

  useEffect(() => {
    if (slide.pause) return;
    const timeout = setTimeout(() => {
      setSlide({
        ...slide,
        current: slide.current === hero.length - 1 ? 0 : slide.current + 1,
      });
      setUpNext(
        upNext.map((el) => {
          el = el + 1;
          if (el === hero.length) {
            el = 0;
          }
          return el;
        }),
      );
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

      <S.VerticalNews>
        <span>Up Next</span>
        {upNext.map((i) => (
          <S.NewsBlock
            key={i}
            onClick={() => setSlide({ ...slide, current: i })}
          >
            <img src={hero[i].cover} alt={hero[i].title} />
            <S.Legend>
              <p>{hero[i].title}</p>
              <p>{hero[i].subtitle}</p>
            </S.Legend>
          </S.NewsBlock>
        ))}
      </S.VerticalNews>
    </S.Wrapper>
  );
};

export default Hero;
