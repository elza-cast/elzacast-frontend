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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Success = ({ navigation, route }) => {
  const {
    title,
    message,
    buttonText,
    routeName,
  } = route.params;
  return (
    <Container>
      <Image>
        <Done style={Done} />
      </Image>
      <Text>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Text>
      <LargePurpleButton
        onPress={() => navigation.navigate(routeName)}
      >
        {buttonText}
      </LargePurpleButton>
    </Container>
  );
};

export default Success;
