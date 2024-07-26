import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <a
          href='/'
          onClick={() => {
            console.log(<Outlet />);
          }}
        >
          home
        </a>
        <a
          href='/posts'
          onClick={() => {
            console.log(<Outlet />);
          }}
        >
          blog
        </a>
        <a
          href='/about'
          onClick={() => {
            console.log(<Outlet />);
          }}
        >
          about
        </a>
        <br />
        <Link to='/'>home</Link>
        <Link to='/posts'>blog</Link>
        <Link to='/about'>about</Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>CopyRight 2024</footer>
    </div>
  );
};

export default Layout;
