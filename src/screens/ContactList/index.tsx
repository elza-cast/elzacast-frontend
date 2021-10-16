import React, {
  useState, useEffect,
} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
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
  ContainerList,
} from './styles';

import ContactCard from '../../components/ContactCard';
import MediumPurpleButton from '../../components/Buttons/MediumPurpleButton';
import MediumWhiteButton from '../../components/Buttons/MediumWhiteButton';
import colors from '../../styles/colors';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface Contact {
  id: string;
  nome: string;
  telefone: string;
}

const ContactList: React.FC = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    api.get(`/contato/${user.id}`).then((response) => {
      setContacts(response.data);
    });
    setLoading(false);
  }, [contacts]);

  return (
    <>

      <Container>
        <View>
          <Title>Minha lista de contatos</Title>
        </View>
        {/* eslint-disable-next-line no-nested-ternary */}
        { loading ? (
          <ActivityIndicator size="large" color={colors.purple} />
        ) : contacts.length > 0 ? (
          <ContainerList>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <List>
                {contacts.map((contact) => (
                // eslint-disable-next-line max-len
                  <ContactCard id={contact.id} name={contact.nome} phone={contact.telefone} key={contact.telefone} />
                ))}
              </List>

            </ScrollView>
          </ContainerList>
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
    </>
  );
};

export default ContactList;
