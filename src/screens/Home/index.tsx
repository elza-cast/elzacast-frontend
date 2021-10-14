import React from 'react';
import { Linking, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  TextHeader,
  TextHeaderBold,
  Icon,
  SignOutButton,
  ContainerSignOut,
  ContainerModal,
  Title,
  Paragraph,
  ContentHeader,
  Actions,
  ContainerButton,
  EmergencyButton,
  TitleButton,
  ContentModal,
  Awesome,
  GroupButtons,
  AlertButton,
  ContactsButton,
  BlackTitleButton,
  ForumButton,
} from './styles';

import Background from '../../components/Background';
import Modal from '../../components/Modal';
import colors from '../../styles/colors';

const Home = () => {
  const navigation = useNavigation();

  function emergencyCall() {
    const phone = 190;
    let phoneNumber = '';

    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }

    // eslint-disable-next-line consistent-return
    Linking.canOpenURL(phoneNumber).then((supported) => {
      if (!supported) {
        Alert.alert('Número de telefone não disponível');
      } else {
        return Linking.openURL(phoneNumber);
      }
    }).catch((err) => Alert.alert('Erro', err));
  }

  return (
    <Container>
      <Header>
        <Background>
          <ContentHeader>
            <TextHeader>
              Olá,
              <TextHeaderBold> Maria</TextHeaderBold>
            </TextHeader>
            <SignOutButton onPress={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              navigation.navigate('SignIn');
            }}
            >
              <ContainerSignOut>
                <TextHeader>Sair</TextHeader>
                <Icon
                  name="log-out"
                  size={20}
                  color={colors.white}
                />
              </ContainerSignOut>
            </SignOutButton>
          </ContentHeader>
        </Background>
      </Header>
      <ContainerModal>
        <Modal>
          <ContentModal>
            <Title>Queremos ouvir sua voz!</Title>
            {/* eslint-disable-next-line max-len */}
            <Paragraph>Alerte a sua lista de contatos ou acione a amergência sempre que precisar</Paragraph>
            <Actions>
              <EmergencyButton onPress={() => emergencyCall()}>
                <ContainerButton>
                  <Awesome
                    name="exclamation-circle"
                    size={44}
                    color={colors.white}
                  />
                  <TitleButton>Acionar Emergência</TitleButton>
                </ContainerButton>
              </EmergencyButton>
              <GroupButtons>

                <AlertButton onPress={() =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line implicit-arrow-linebreak
                  navigation.navigate('Success', {
                    title: 'Alerta enviado!',
                    message: 'Um SMS de alerta foi enviado à sua lista de contatos.',
                    buttonText: 'Entendi',
                    routeName: 'Home',
                  })}
                >
                  <ContainerButton>
                    <Awesome
                      name="paper-plane"
                      size={44}
                      color={colors.white}
                    />
                    <TitleButton>Alertar contatos</TitleButton>
                  </ContainerButton>
                </AlertButton>
                <ContactsButton>
                  <ContainerButton>
                    <Awesome
                      name="users"
                      size={44}
                      color={colors.gray}
                    />
                    <BlackTitleButton>Ver lista de contatos</BlackTitleButton>
                  </ContainerButton>
                </ContactsButton>
              </GroupButtons>
              <ForumButton>
                <ContainerButton>
                  <Awesome
                    name="comments"
                    size={44}
                    color={colors.white}
                  />
                  <TitleButton>Acessar o Fórum</TitleButton>
                </ContainerButton>
              </ForumButton>
            </Actions>
          </ContentModal>
        </Modal>
      </ContainerModal>
    </Container>
  );
};

export default Home;
