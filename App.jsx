import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';

// Exemplo de um componente de cabeçalho com styled-components
const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const CartIcon = styled(FiShoppingCart)`
  font-size: 1.5em;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <Header>
        <Title>Minha Loja Fantástica</Title>
        <CartIcon />
      </Header>
      <main style={{ padding: '20px' }}>
        <h2>Bem-vindo!</h2>
        <p>Este é um site completo e funcional, pronto para ser customizado.</p>
      </main>
    </div>
  );
}

export default App;
