import React from 'react';
import { ScrollView } from 'react-native';
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
    <Title>ELZA CAST</Title>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Modal>
          <Paragraph>Oi amada!</Paragraph>
          <Paragraph>É a primeira vez que você usa o nosso aplicativo?</Paragraph>
          {/* eslint-disable-next-line max-len */}
          <Paragraph>Se sim, por favor, crie a sua conta para a gente se conhecer melhor.</Paragraph>
          <Paragraph>Se não, espero que você esteja bem. Estamos aqui pra te ajudar!</Paragraph>
          <ContainerLogo>
            <HandLogo />
          </ContainerLogo>
          <Actions>
            <SmallPurpleButton>Criar Conta</SmallPurpleButton>
            <SmallPinkButton>Entrar</SmallPinkButton>
          </Actions>
        </Modal>
      </Container>
    </ScrollView>
  </Background>
);

export default Welcome;
