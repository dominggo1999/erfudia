import React from 'react';
import { Link as RRLink, NavLink as RRNavLink } from 'react-router-dom';

const scrollToTop = (callback = () => {}) => {
  window.scrollTo(0, 0);

  callback();
};

export const NavLink = (props) => {
  const {
    children, handleClick, ...rest
  } = props;

  return (
    <RRNavLink
      onClick={() => scrollToTop(handleClick)}
      {...rest}
      className={(navData) => (navData.isActive ? 'link-active' : null)}
    >
      {children}
    </RRNavLink>
  );
};

const Link = (props) => {
  const { children, handleClick, ...rest } = props;

  return (
    <RRLink
      onClick={() => scrollToTop(handleClick)}
      {...rest}
    >
      {children}
    </RRLink>
  );
};

export default Link;
