import React from 'react';
import { Text } from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DeleteIcon from '../../assets/delete.svg';

import {
  Container,
  InfoArea,
  Name,
  Phone,
  DeleteArea,
} from './styles';

interface Props {
  name: string;
  phone: string;
}

const ContactCard = (props:Props) => {
  const { name, phone } = props;

  return (
    <Container>
      <InfoArea>
        <Name>
          {name}
        </Name>
        <Phone>
          {phone}
        </Phone>
      </InfoArea>
      <DeleteArea>
        <DeleteIcon />
      </DeleteArea>
    </Container>
  );
};

export default ContactCard;
