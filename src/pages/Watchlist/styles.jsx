import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  border: 1px dashed transparent;
  transition: 0.15s ease-in-out;

  &:hover {
    background: #252525;
  }

  &:active {
    background: #5e5e5e;
  }

  &:focus {
    border: 1px dashed #fff;
  }
`;

export const EmptyWatchlist = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem 0;
`;

export const TextButton = styled(Button)`
  color: #fff;
  font-weight: 600;
  min-height: 3rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
`;
