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
`;

export const Legend = styled.legend`
  font-size: 1.8rem;
`;

export const Fieldset = styled.fieldset`
  text-align: center;
  border: 0;

  & input {
    display: block;
    width: 100%;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
  }
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

export const AltSignIn = styled.div`
  & hr {
    max-width: 50%;
    margin: 2rem auto;
    border-radius: 500%;
    color: rgba(#f5c518, 50%);
  }
`;
