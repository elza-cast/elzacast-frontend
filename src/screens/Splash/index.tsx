import React from 'react';
import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '../../assets/logo.svg';
import Background from '../../components/Background';

const Splash = () => (
  <Background>
    <Container>
      <Logo width={369} height={499} fill="#FFF" />
    </Container>
  </Background>
);

export default Splash;
