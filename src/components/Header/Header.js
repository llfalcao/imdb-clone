import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import * as S from './styles';

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  function toggleDrawer(e) {
    if (e.target.classList.contains('drawer')) return;
    setDrawer(!drawer);
  }

  return (
    <S.Header>
      <Button type="button" variant="icon" icon="menu" onClick={toggleDrawer} />

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
        <img src="/img/logo.png" alt="IMDc logo" />
      </div>

      <Button type="button" variant="icon" icon="search" />

      <Link to="/watchlist">
        <Button type="button" variant="text" value="Watchlist" />
      </Link>

      <Button type="button" variant="text" value="Sign In" />
    </S.Header>
  );
};

export default Header;
