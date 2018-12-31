import React from 'react';
import { StyledLink } from '../../styles/Links';

const ROUTES = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/play',
    label: 'Play',
  },
  {
    href: '/thoughts',
    label: 'Thoughts',
  },
  {
    href: '/products',
    label: 'Products',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/contact/examples',
    label: 'Form Examples',
  },
];

const NavLinks = () => {
  return ROUTES.map((route, i) => (
    <StyledLink key={i} to={route.href}>
      {route.label}
    </StyledLink>
  ));
};

export default NavLinks;
