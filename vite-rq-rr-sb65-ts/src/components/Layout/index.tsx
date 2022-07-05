import React from 'react';
import { Outlet } from 'react-router-dom';
import User from '../../types';
import { Header } from '../Header';

export const Layout = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Outlet />
      </article>
  );
};
