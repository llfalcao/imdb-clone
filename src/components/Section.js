import styled from 'styled-components';

const SectionContainer = styled.section`
  background: #121212;
  padding: 2rem 0.5rem;
  margin: 1rem 0;
`;

const SectionHeader = styled.div`
  text-align: left;
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    & span {
      color: #f5c518;
    }
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
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const SectionSubtitle = styled.p`
  padding: 1rem 0 0;
  font-size: 1.15rem;
  opacity: 0.7;
  letter-spacing: 0.05rem;
`;

const Section = ({ title, subtitle, data }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          {title} <span className="material-icons">arrow_forward_ios</span>
        </SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </SectionHeader>

      {data}
    </SectionContainer>
  );
};

export default Section;
