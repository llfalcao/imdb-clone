import Carousel from '../Carousel';
import * as S from './styles';

const Section = ({ id, title, subtitle, type, data, loading }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {title} <span className="material-icons">keyboard_arrow_right</span>
        </S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>

      {loading ? (
        <span className="material-icons icon-loading">autorenew</span>
      ) : type === 'carousel' ? (
        <Carousel id={id} data={data} />
      ) : null}
    </S.Container>
  );
};

export default Section;
