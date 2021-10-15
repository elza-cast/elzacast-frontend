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
} from './styles';

import ContactCard from '../../components/ContactCard';
import MediumPurpleButton from '../../components/Buttons/MediumPurpleButton';
import MediumWhiteButton from '../../components/Buttons/MediumWhiteButton';

const ContactList: React.FC = () => {
  const [keyboard, setKeyboard] = useState(false);
  const navigation = useNavigation();

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
            <List>
              <ContactCard
                name="Fernando"
                phone="(61) 99326-9928"
              />
            </List>
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
