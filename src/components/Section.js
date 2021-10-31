import styled from 'styled-components';
import Carousel from './Carousel';

const SectionContainer = styled.section`
  background: #121212;
  padding: 2rem 0.5rem;
  margin: 1rem 0;
  overflow: hidden;
`;

const SectionHeader = styled.div`
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

const SectionTitle = styled.h3`
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

const SectionSubtitle = styled.p`
  padding: 1rem 0 0;
  font-size: 1.15rem;
  opacity: 0.7;
  letter-spacing: 0.05rem;
`;

const Section = ({ id, title, subtitle, type, data, loading }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          {title} <span className="material-icons">keyboard_arrow_right</span>
        </SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </SectionHeader>

      {loading ? (
        <span className="material-icons icon-loading">autorenew</span>
      ) : type === 'carousel' ? (
        <Carousel id={id} data={data} />
      ) : null}
    </SectionContainer>
  );
};

export default Section;
