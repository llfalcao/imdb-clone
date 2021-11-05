import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import * as S from './styles';

const Header = ({ user, onSignOut }) => {
  const [drawer, setDrawer] = useState(false);

  function toggleDrawer(e) {
    if (e.target.classList.contains('drawer')) return;
    setDrawer(!drawer);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Button
          type="button"
          variant="icon"
          icon="menu"
          onClick={toggleDrawer}
        />
        {drawer ? (
          <S.DrawerContainer onClick={toggleDrawer}>
            <S.Drawer className="drawer">
              <S.DrawerHeader className="drawer">
                <Button
                  type="button"
                  variant="icon"
                  icon="close"
                  onClick={toggleDrawer}
                />
              </S.DrawerHeader>
            </S.Drawer>
          </S.DrawerContainer>
        ) : null}
        <div className="header-logo">
          <Link to="/imdb-clone">
            <img src="/imdb-clone/img/logo.png" alt="IMDc logo" />
          </Link>
        </div>
        <Button type="button" variant="icon" icon="search" />
        <Link to={'/imdb-clone/watchlist'}>
          <Button type="button" variant="text" value="Watchlist" />
        </Link>

        {user.didAuth ? (
          <Link to="/imdb-clone" onClick={onSignOut}>
            <Button type="button" variant="text" value="Sign out" />
          </Link>
        ) : (
          <Link to={'/imdb-clone/sign-in'}>
            <Button type="button" variant="text" value="Sign in" />
          </Link>
        )}
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
