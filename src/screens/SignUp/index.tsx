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
  Container,
  Title,
  Actions,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import MediumWhiteButton from '../../components/Buttons/MediumWhiteButton';
import MediumPurpleButton from '../../components/Buttons/MediumPurpleButton';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  phone: string;
  password: string;
  // eslint-disable-next-line camelcase
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const [keyboard, setKeyboard] = useState(false);
  const phoneInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmationInputRef = useRef<TextInput>(null);
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

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf([
            null, Yup.ref('password')], 'As senhas precisam ser iguais'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/usuarios/cadastrar', {
          usuario: data.name,
          telefone: data.phone,
          senha: data.password,
        });

        if (response.status === 201) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          navigation.navigate('Success', {
            title: 'Bem Vinda!',
            message: 'Agora podemos te ajudar!',
            buttonText: 'Entendi',
            routeName: 'SignIn',
          });
        }
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
          'Erro',
          'Ocorreu um erro ao criar a conta.',
        );
      }
    }, [],
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
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                keyboardType="default"
                name="name"
                icon="user"
                autoCapitalize="words"
                placeholder="Nome ou apelido"
                returnKeyType="next"
                onSubmitEditing={() => {
                  phoneInputRef.current?.focus();
                }}
              />
              <Input
                ref={phoneInputRef}
                keyboardType="numeric"
                name="phone"
                icon="phone"
                placeholder="Telefone"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordConfirmationInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordConfirmationInputRef}
                secureTextEntry
                name="password_confirmation"
                icon="lock"
                placeholder="Confirme a senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
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
                    formRef.current?.submitForm();
                  }}
                >
                  Criar conta
                </MediumPurpleButton>
              </Actions>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
