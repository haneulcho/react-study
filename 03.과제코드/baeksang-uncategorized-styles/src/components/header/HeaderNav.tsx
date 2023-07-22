import { HeaderLogo } from '@/components/header';
import { HeaderNavItem } from '@/components/header';
import { menuItems } from '@/mocks/menuItem';

export const HeaderNav = () => {
  return (
    <header className={window.location.pathname === '/' ? 'header-wrap' : 'header-wrap sub'}>
      <div className="container-inner">
        <h1 className="logo">
          <HeaderLogo />
        </h1>
        <div className="gnb">
          <ul>
            {menuItems.map((item) => {
              return (
                <HeaderNavItem
                  key={item.path}
                  {...item}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
