import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Paragraph, Actions, ContainerLogo, View } from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HandLogo from "../../assets/hand-holding-heart.svg";

import Background from "../../components/Background";
import SmallPurpleButton from "../../components/Buttons/SmallPurpleButton";
import SmallPinkButton from "../../components/Buttons/SmallPinkButton";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Title>ELZA CAST</Title>
      <Container>
        <View>
          <Paragraph>Oi amada!</Paragraph>
          <Paragraph>
            É a primeira vez que você usa o nosso aplicativo?
          </Paragraph>
          <Paragraph>
            Se sim, por favor, crie a sua conta para a gente se conhecer melhor.
          </Paragraph>
          <Paragraph>
            Se não, espero que você esteja bem. Estamos aqui pra te ajudar!
          </Paragraph>
          <ContainerLogo>
            <HandLogo />
          </ContainerLogo>
          <Actions>
            <SmallPurpleButton>Criar Conta</SmallPurpleButton>
            <SmallPinkButton
              onPress={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                navigation.navigate("SignIn");
              }}
            >
              Entrar
            </SmallPinkButton>
          </Actions>
        </View>
      </Container>
    </Background>
  );
};

export default Welcome;
