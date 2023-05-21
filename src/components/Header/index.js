import React from 'react';
import { Menu, Item, Lista, Logo, Container } from './styles';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Header() {
  return (
   <Menu>
    <Logo><span>Logo</span></Logo>
    <Lista>
      <Item><Link to="/">Home</Link></Item>
      <Item><Link to="/servicos">Serviços</Link></Item>
    </Lista>
   </Menu>

  );
}

export default Header;