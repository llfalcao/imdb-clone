import * as S from './styles';
import Button from '../Button';

const items = [
  {
    category: 'Movies',
    icon: 'theaters',
  },
  {
    category: 'TV Shows',
    icon: 'tv',
  },
  {
    category: 'Watch',
    icon: 'video_library',
  },
  {
    category: 'Awards and Events',
    icon: 'stars',
  },
  {
    category: 'Celebs',
    icon: 'people',
  },
  {
    category: 'Community',
    icon: 'public',
  },
];

const Drawer = ({ toggleDrawer }) => {
  return (
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

        <div>
          {items.map((item, i) => (
            <S.Category key={i} onClick={(e) => e.stopPropagation()}>
              <span className="material-icons material-icons-outlined">
                {item.icon}
              </span>
              {item.category}
            </S.Category>
          ))}
        </div>
      </S.Drawer>
    </S.DrawerContainer>
  );
};

export default Drawer;
