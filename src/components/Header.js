import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const StyledHeader = styled.header`
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
const Button = styled.button`
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
const Icon = styled(Button)`
  aspect-ratio: 1;
  border-radius: 100%;
`;
const TextButton = styled(Button)`
  color: #fff;
  font-weight: 600;
  min-height: 3rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
`;
const colorFade = keyframes`
  to {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const DrawerContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  animation: ${colorFade} 0.3s forwards;
  z-index: 1000;
`;
const slideRight = keyframes`
  from {
    transform: translateX(-280px);
  }
  to {
    transform: translateX(0);
  }
`;
const Drawer = styled.div`
  width: 280px;
  height: 100%;
  margin: 0;
  background: #1f1f1f;
  animation: ${slideRight} 0.3s;
`;
const DrawerHeader = styled.div`
  position: relative;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFNJREFUGBlj/P//vzwDBHxkZGT8AGWjUEA1AowgAijKD5XBqZgRpIAYxWCFxCiGKySkGEUhPsUYCnEpxqoQm2ImqI9BcigAGqYfoYL8TEAGPzGKAcYdNCelTSU5AAAAAElFTkSuQmCC');
  min-height: 4rem;

  & ${Icon} {
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

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  function toggleDrawer(e) {
    if (e.target.classList.contains('drawer')) return;
    setDrawer(!drawer);
  }

  return (
    <StyledHeader>
      <Icon onClick={toggleDrawer}>
        <span className="material-icons">menu</span>
      </Icon>

      {drawer ? (
        <DrawerContainer onClick={toggleDrawer}>
          <Drawer className="drawer">
            <DrawerHeader className="drawer">
              <Icon onClick={toggleDrawer}>
                <span className="material-icons">close</span>
              </Icon>
            </DrawerHeader>
          </Drawer>
        </DrawerContainer>
      ) : null}

      <div className="header-logo">
        <img src="/img/logo.png" alt="IMDc logo" />
      </div>
      <Icon>
        <span className="material-icons">search</span>
      </Icon>

      <Link to="/watchlist">
        <TextButton>Watchlist</TextButton>
      </Link>

      <TextButton>Sign In</TextButton>
    </StyledHeader>
  );
};

export default Header;
