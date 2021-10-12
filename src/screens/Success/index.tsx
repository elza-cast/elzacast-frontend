import React from "react";
import { Container, Image, Title, Message, Text } from "./styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Done from "../../assets/done.svg";
import LargePurpleButton from "../../components/Buttons/LargePurpleButton";


function Success({ route }) {
  const {title, message, buttonText } = route.params;

  return (
    <Container>
      <Image>
        <Done style={Done}/>
      </Image>
      <Text>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Text>
      <LargePurpleButton>{buttonText}</LargePurpleButton>
    </Container>

  );
};

export default Success;
