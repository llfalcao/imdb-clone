import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: #121212;
  margin: 1rem 0;
  padding: 2rem 0.5rem;
`;

export const EmptyWatchlist = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem 0;
`;

export const Remove = styled.div`
  position: absolute;
  right: -1rem;
  top: -1rem;
  filter: drop-shadow(0 2px 2px #373737);
`;
