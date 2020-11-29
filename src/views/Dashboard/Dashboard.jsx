/* eslint-disable no-return-assign */
import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';

import { useAuth } from 'contexts/AuthProvider';

import logo from 'assets/logo/set-logo.svg';
import illustrationDashboard from 'assets/illustration-dashboard.svg';

import {
  Container,
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  Profile,
  ProfileInfo,
  ProfileMenu,
  IllustrationDashboard,
} from './Dashboard.style';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuth() || {};

  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const handleLogout = () => {
    user.logout();
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (menuOpen) {
          toggleMenu();
        }
      }
    },
    [menuRef, menuOpen, toggleMenu],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <Container>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderLogo>
            <img src={logo} alt="" />
            <p>Set</p>
          </HeaderLogo>

          <Profile>
            <ProfileInfo type="button" onClick={toggleMenu}>
              <img src={user.currentUser?.photoURL} alt="" />
              <p>{user.currentUser?.displayName.split(' ')[0]}</p>
            </ProfileInfo>

            <ProfileMenu visible={menuOpen} ref={menuRef}>
              <button type="button" onClick={handleLogout}>
                Sair
              </button>
            </ProfileMenu>
          </Profile>
        </HeaderContent>
      </HeaderWrapper>

      <IllustrationDashboard src={illustrationDashboard} />
    </Container>
  );
};

export default Dashboard;
