import React, { useState } from 'react';

import { useAuth } from 'contexts/AuthProvider';

import logo from 'assets/logo/set-logo.svg';

import {
  Container,
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  Profile,
  ProfileInfo,
  ProfileMenu,
} from './Dashboard.style';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuth() || {};

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    user.logout();
  };

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

            <ProfileMenu visible={menuOpen}>
              <button type="button" onClick={handleLogout}>
                Sair
              </button>
            </ProfileMenu>
          </Profile>
        </HeaderContent>
      </HeaderWrapper>
    </Container>
  );
};

export default Dashboard;
