import React, {
  useState, useEffect,
} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  Actions,
  Container,
  Title,
  List,
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
  const [contacts, setContacts] = useState<Array<Contact>>([{ name: 'Contact1', phone: '123' }]);

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
              <Title>Lista de contatos</Title>
            </View>
            {contacts && (
              <List>
                {contacts.map((contact, _) => (
                  <ContactCard name={contact.name} phone={contact.phone} />
                ))}
              </List>
            )}
            <View>
              {/* TODO Add Image */}
              {/* TODO Add text  */}
            </View>
            <Actions>
              <MediumWhiteButton
                onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  navigation.pop();
                }}
              >
                Voltar
              </MediumWhiteButton>
              <MediumPurpleButton
                onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  navigation.navigate('AddContact');
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
