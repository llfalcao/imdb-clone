import styled, { keyframes } from 'styled-components';
import { IconBtn } from '../Button/styles';

export const Header = styled.header`
  position: relative;
  min-height: 3.5rem;
  background: #121212;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  & .header-logo {
    flex-grow: 1;
    text-align: left;
    margin: auto auto auto 1rem;

    & img {
      vertical-align: middle;
      border-radius: 0.25rem;
    }
  }
`;

export const colorFade = keyframes`
  to {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const DrawerContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  animation: ${colorFade} 0.3s forwards;
  z-index: 1000;
`;

export const slideRight = keyframes`
  from {
    transform: translateX(-280px);
  }
  to {
    transform: translateX(0);
  }
`;

export const Drawer = styled.div`
  width: 280px;
  height: 100%;
  margin: 0;
  background: #1f1f1f;
  animation: ${slideRight} 0.3s;
`;

export const DrawerHeader = styled.div`
  position: relative;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFNJREFUGBlj/P//vzwDBHxkZGT8AGWjUEA1AowgAijKD5XBqZgRpIAYxWCFxCiGKySkGEUhPsUYCnEpxqoQm2ImqI9BcigAGqYfoYL8TEAGPzGKAcYdNCelTSU5AAAAAElFTkSuQmCC');
  min-height: 4rem;

  & ${IconBtn} {
    position: absolute;
    right: 4px;
    top: 0;
    min-height: calc(100% - 8px);
    margin: 4px 0;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;
