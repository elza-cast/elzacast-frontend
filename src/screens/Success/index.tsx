import React from "react";
import { Container, Title, Message } from "./styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Done from "../../assets/done.svg";
import SmallPurpleButton from "../../components/Buttons/SmallPurpleButton";


function Success({ route }) {
  const {title, message, buttonText } = route.params;

  return (
    <Container>
      <Done />
      <Title>{title}</Title>
      <Message>{message}</Message>
      <SmallPurpleButton>{buttonText}</SmallPurpleButton>
    </Container>

  );
};

export default Success;
