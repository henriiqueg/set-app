import React from 'react';

import { useAuth } from 'contexts/AuthProvider';

const Login = () => {
  const user = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    user.login();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">login com google</button>
      </form>
    </div>
  );
};

export default Login;
