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

interface Props {
  name: string;
  phone: string;
}

const ContactCard = (props:Props) => {
  const { name, phone } = props;

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
      <DeleteArea>
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
