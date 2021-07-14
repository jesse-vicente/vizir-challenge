import { useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';
import ModalCallRate from '../../components/ModalCallRate';

import { Container, Content, Background } from './styles';

export default function Home() {
  const [isModalOpen, setisModalOpen] = useState(false);

  function toggleModal() {
    setisModalOpen(!isModalOpen);
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <h1>Suas ligações são mais baratas com o FaleMais!</h1>

          <p>Com o FaleMais você tem até mais 120 minutos em ligações! <br />
          Temos planos disponíveis com até mais de 50% de desconto para toda a sua região.</p>

          <button onClick={toggleModal}>
            Conheça agora
            <FiArrowRight size={20} />
          </button>
        </Content>

        <Background />
      </Container>

      <ModalCallRate
        isOpen={isModalOpen}
        setIsOpen={toggleModal}
      />
    </>
  )
}
