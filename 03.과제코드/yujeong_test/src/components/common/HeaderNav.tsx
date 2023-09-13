import { HeaderNavItem } from '@/components/common/HeaderNavItem';
import { menuItems } from '@/constants/menuItems';
import { HeaderLogo } from '@/components';
import { useCallback, useContext, useState } from 'react';
import { SignInModal } from '@/components/modal/SignInModal';
import { UserContext } from '@/providers';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export const HeaderNav = () => {
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  const { userInfo } = useContext(UserContext);

  const handleSignupButtonClick = useCallback((open: boolean) => {
    setIsSignupModalVisible(open);
  }, []);

  //로그아웃
  const navigate = useNavigate();

  const { logout } = useAuth({
    onSuccess() {
      navigate('/');
    },
  });

  const handleSignOutButtonClick = useCallback(() => {
    logout();
  }, []);

  return (
    <header className={window.location.pathname === '/' ? 'header-wrap' : 'header-wrap sub'}>
      <div className="container-inner">
        <h1 className="logo">
          <HeaderLogo />
        </h1>
        <div className="gnb">
          <ul className="flex items-center">
            {menuItems.map((item) => {
              return <HeaderNavItem key={item.path} {...item} />;
            })}
            <li className="text-sm text-purple-500 hover:font-bold">
              {userInfo.id ? (
                <span>
                  {userInfo.name} ({userInfo.role})
                  <button type="button" onClick={() => handleSignOutButtonClick()}>
                    로그아웃
                  </button>
                </span>
              ) : (
                <button type="button" onClick={() => handleSignupButtonClick(true)}>
                  회원가입/로그인
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* 회원가입 모달 레이어 */}
      <SignInModal isOpen={isSignupModalVisible} onClose={() => handleSignupButtonClick(false)} />
    </header>
  );
};
