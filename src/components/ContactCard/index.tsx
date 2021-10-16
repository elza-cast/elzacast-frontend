import React from 'react';

import {
  Container,
  InfoArea,
  Name,
  Phone,
  DeleteArea,
  Awesome,
  ContactContainer,
} from './styles';
import colors from '../../styles/colors';
import api from '../../services/api';

interface Props {
  id: string;
  name: string;
  phone: string;
}

const ContactCard = (props:Props) => {
  const { id, name, phone } = props;

  async function deleteContact(contactId: string) : Promise<void> {
    await api.delete(`/contato/${contactId}`);
  }

  return (
    <Container>
      <ContactContainer>
        <Awesome
          name="user"
          size={44}
          color={colors.purple}
        />
        <InfoArea>
          <Name>
            {name}
          </Name>
          <Phone>
            {phone}
          </Phone>
        </InfoArea>
      </ContactContainer>
      <DeleteArea onPress={() => deleteContact(id)}>
        <Awesome
          name="trash"
          size={34}
          color={colors.gray}
        />
      </DeleteArea>
    </Container>
  );
};

export default ContactCard;
