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

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const navbarItems = [
    {
    text:"Projects",
    link:"#projects"
    },
    {
      text:"About",
      link:"#about"
    },
    {
      text:"Contact",
      link:""
    },
  ];

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand className="text-white navbar-font text-4xl" href="/" >Pedja G </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {
          navbarItems.map(el=>
            <NavItem>
                <NavLink  key={el.index} className={'text-white nav-links'} href={el.link}><a>{el.text}</a></NavLink>
            </NavItem>
          )
          }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
