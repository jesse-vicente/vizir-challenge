import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import { Container, Title, Menu, BurgerMenu } from './styles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Title>Telzir</Title>

      <Menu>
        <ul>
          <li><Link to="/">Sobre</Link></li>
          <li><Link to="/">Preços</Link></li>
          <li><Link to="/">Contato</Link></li>

          <button>Cadastre-se</button>
          <button>Entrar</button>
        </ul>

        <FiMenu
          size={32}
          onClick={e => setMenuOpen(!menuOpen)}
        />
      </Menu>

      <BurgerMenu open={menuOpen}>
        <strong>Telzir</strong>

        <ul>
          <li><Link to="/">Sobre</Link></li>
          <li><Link to="/">Preços</Link></li>
          <li><Link to="/">Contato</Link></li>
          <li><Link to="/">Cadastre-se</Link></li>
          <li><Link to="/">Entrar</Link></li>
        </ul>

        <FiX
          size={32}
          onClick={e => setMenuOpen(!menuOpen)}
        />
      </BurgerMenu>
    </Container>
  )
}
