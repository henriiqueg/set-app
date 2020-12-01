import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';

import logo from 'assets/logo/set-logo.svg';

import { useAuth } from 'contexts/AuthProvider';

import {
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  Profile,
  ProfileInfo,
  ProfileMenu,
} from './Header.style';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuth() || {};
  const menuRef = useRef(null);

  const handleLogout = () => {
    user.logout();
  };

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

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
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo to="/">
          <img src={logo} alt="" />
          <p>Set</p>
        </HeaderLogo>

        <Profile>
          <ProfileInfo type="button" onClick={() => toggleMenu()}>
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
  );
};

export default Header;
