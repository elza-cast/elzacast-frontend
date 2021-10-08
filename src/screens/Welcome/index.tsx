import React from 'react';
import {
  Container, Title, Paragraph, Actions, ContainerLogo,
} from './styles';
import Modal from '../../components/Modal';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HandLogo from '../../assets/hand-holding-heart.svg';

import Background from '../../components/Background';
import SmallPurpleButton from '../../components/Buttons/SmallPurpleButton';
import SmallPinkButton from '../../components/Buttons/SmallPinkButton';

const Welcome = () => (
  <Background>
    <Container>
      <Title>ELZA CAST</Title>
      <Modal>
        <Paragraph>Oi amada!</Paragraph>
        <Paragraph>É a primeira vez que você usa o nosso aplicativo?</Paragraph>
        <Paragraph>Se sim, por favor, crie a sua conta para a gente se conhecer melhor.</Paragraph>
        {/* eslint-disable-next-line max-len */}
        <Paragraph>Se não, espero que você esteja bem e saiba que estamos aqui pra te ajudar!</Paragraph>
        <ContainerLogo>
          <HandLogo />
        </ContainerLogo>
        <Actions>
          <SmallPurpleButton>Criar Conta</SmallPurpleButton>
          <SmallPinkButton>Entrar</SmallPinkButton>
        </Actions>
      </Modal>
    </Container>
  </Background>
);

export default Welcome;
