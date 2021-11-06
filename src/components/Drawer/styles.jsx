import styled, { keyframes } from 'styled-components';
import { IconBtn } from '../Button/styles';

export const colorFade = keyframes`
  to {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const DrawerContainer = styled.div`
  position: absolute;
  width: 100%;
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

export const Category = styled.header`
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  cursor: pointer;
  border: 1px dashed transparent;

  & span {
    margin: 0;
  }

  &:hover {
    background: #252525;
  }

  &:active {
    background: #5e5e5e;
    border: 1px dashed #fff;
  }

  &:active:focus {
    border: 1px dashed #fff;
  }
`;
