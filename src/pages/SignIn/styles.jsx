import styled from 'styled-components';
import Button from '../../components/Button';

export const Wrapper = styled.div`
  background: #1f1f1f;
  height: 100vh;
`;

export const Form = styled.form`
  width: 90%;
  max-width: 300px;
  padding: 3rem 0;
  text-align: center;
`;

export const Legend = styled.legend`
  font-size: 1.8rem;
`;

export const SignInBtn = styled(Button)`
  background: #f5c518;
  color: #000000;
  display: block;
  width: 100%;
  margin: 1rem auto;

  &:hover {
    background: #f5c518;
    opacity: 0.9;
  }
`;
