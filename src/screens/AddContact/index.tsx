import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import {
  Actions,
  Container,
  Title,
} from './styles';
import LargePurpleButton from '../../components/Buttons/LargePurpleButton';
import LargeWhiteButton from '../../components/Buttons/LargeWhiteButton';

import getValidationErrors from '../../utils/getValidationErrors';
import SmallPurpleButton from '../../components/Buttons/SmallPurpleButton';
import SmallWhiteButton from '../../components/Buttons/SmallWhiteButton';

interface SignInFormData {
    name: string;
    phone: string;
}

const AddContact: React.FC = () => {
  const [keyboard, setKeyboard] = useState(false);
  const nameInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboard(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(false);
    });
  }, []);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // TODO: Função SigIn será inserida aqui
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navigation.navigate('Success', {
          title: 'Que bom!',
          message: 'O contato foi adicionado a sua lista!',
          buttonText: 'Entendi',
          routeName: 'AddContact',
        });
      } catch (err) {
        let errorMessage = '';

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          Object.keys(errors).forEach((item) => {
            errorMessage += `\n${errors[item]}`;
          });

          Alert.alert('Erro de validação', `${errorMessage}`);

          return;
        }
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao criar o contato, cheque as credenciais.',
        );
      }
    },
    [],
  );
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
              <Title>Adicionar contato</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                ref={nameInputRef}
                secureTextEntry
                name="name"
                icon="user"
                placeholder="Nome ou apelido"
                returnKeyType="next"
                onSubmitEditing={() => {
                  nameInputRef.current?.focus();
                }}
              />
              <Input
                keyboardType="numeric"
                name="phone"
                icon="phone"
                placeholder="Telefone"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Actions>
                <SmallWhiteButton
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Cadastrar
                </SmallWhiteButton>
                <SmallPurpleButton
                  onPress={() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    navigation.pop();
                  }}
                >
                  Voltar
                </SmallPurpleButton>
              </Actions>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default AddContact;
