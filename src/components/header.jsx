import React, { useState } from 'react';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const navbarItems = [
    {
      key: 1,
      text: "Projects",
      link: "/projects"
    },
    {
      key: 2,
      text: "About",
      link: "/"
    },
    {
      key: 3,
      text: "Contact",
      link: "/contact"
    },
  ];

  return (
    <div >
      <Navbar light expand="md">
        <NavbarBrand className="text-white navbar-font text-4xl" >Pedja G </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              navbarItems.map(el =>
                <NavItem key={el.key}>
                  <Link href={el.link} passHref><NavLink key={el.text} className={'text-white nav-links'}>{el.text}</NavLink></Link>
                </NavItem>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
