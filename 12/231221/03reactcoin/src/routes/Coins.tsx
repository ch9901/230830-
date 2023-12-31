import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;

const Container = styled.div``;
const Header = styled.div``;
const CoinList=styled.ul``
const Coin=styled.li``

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        <Coin></Coin>
      </CoinList>
    </Container>
  );
};

export default Coins;
