import React from 'react';
import {
  Container,
  Image,
  Title,
  Message,
  Text,
} from './styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Done from '../../assets/done.svg';
import LargePurpleButton from '../../components/Buttons/LargePurpleButton';

const Success = () => (
  <Container>
    <Image>
      <Done style={Done} />
    </Image>
    <Text>
      <Title>{}</Title>
      <Message>{}</Message>
    </Text>
    <LargePurpleButton>{}</LargePurpleButton>
  </Container>
);

export default Success;
