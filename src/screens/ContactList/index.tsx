import React, {
  useState, useEffect,
} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Actions,
  Container,
  Title,
  List,
  Awesome,
  Paragraph,
  BlankStage,
} from './styles';

import ContactCard from '../../components/ContactCard';
import MediumPurpleButton from '../../components/Buttons/MediumPurpleButton';
import MediumWhiteButton from '../../components/Buttons/MediumWhiteButton';
import colors from '../../styles/colors';

interface Contact {
  name: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [keyboard, setKeyboard] = useState(false);
  const navigation = useNavigation();
  // const [contacts, setContacts] = useState<Array<Contact>>([]);
  const [contacts, setContacts] = useState<Array<Contact>>([]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboard(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(false);
    });
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Minha lista de contatos</Title>
            </View>
            { contacts.length > 0 ? (
              <List>
                {contacts.map((contact) => (
                  <ContactCard name={contact.name} phone={contact.phone} key={contact.phone} />
                ))}
              </List>
            ) : (
              <BlankStage>
                <Awesome
                  name="users"
                  size={130}
                  color={colors.purple}
                />
                <Paragraph>
                  {/* eslint-disable-next-line max-len */}
                  Você ainda não possui contatos na sua lista. Adicione pessoas que você sabe que se preocupam com você e que poderiam te ajudar nos momentos difíceis.
                </Paragraph>
              </BlankStage>
            )}
            <Actions>
              <MediumWhiteButton
                onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  navigation.navigate('Home');
                }}
              >
                Voltar
              </MediumWhiteButton>
              <MediumPurpleButton
                onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  navigation.navigate('CreateContact');
                }}
              >
                Cadastrar
              </MediumPurpleButton>
            </Actions>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ContactList;
