import React, {
    useState, useRef, useEffect, useCallback,
  } from 'react';

import logo from 'assets/logo/set-logo.svg';
import { useAuth } from 'contexts/AuthProvider';

import {
    Container
  } from './Modulo.style';

const modulos = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useAuth() || {};

  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const handleLogout = () => {
    user.logout();
  };

  return (
      <Container>
          

      </Container>
  )


}