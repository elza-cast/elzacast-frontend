import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/native';
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input";
import { Container, Title } from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import SmallPurpleButton from "../../components/Buttons/SmallPurpleButton";
import { Actions } from "./styles";
import SmallWhiteButton from "../../components/Buttons/SmallWhiteButton";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  password_2: string;
}

const SignUp: React.FC = () => {
  const [keyboard, setKeyboard] = useState(false);
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboard(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboard(false);
    });
  }, []);

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        phone: Yup.string().required("Telefone obrigatório"),
        password: Yup.string().required("Senha obrigatória"),
        password_2: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // TODO: Função SigIn será inserida aqui
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer a conta, cheque as credenciais."
      );
    }
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
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
                icon=""
                autoCapitalize="words"
                placeholder="Nome ou apelido"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
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
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password_2"
                icon="lock"
                placeholder="Confirme a senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Actions>
                <SmallWhiteButton
                  onPress={() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    navigation.pop();
                  }}
                >
                  Voltar
                </SmallWhiteButton>
                <SmallPurpleButton
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Criar conta
                </SmallPurpleButton>
              </Actions>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
