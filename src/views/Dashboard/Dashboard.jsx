import React from 'react';

import { useAuth } from 'contexts/AuthProvider';

const Dashboard = () => {
  const user = useAuth() || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    user.logout();
  };

  return (
    <div>
      <p>
        Seja bem vindo
        {' '}
        <strong>
          {user.currentUser?.displayName}
        </strong>
        <img src={user.currentUser?.photoURL} alt="Perfil" />
      </p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default Dashboard;
