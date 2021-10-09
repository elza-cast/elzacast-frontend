import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, TextInput, Icon } from './styles';
import colors from '../../styles/colors';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    containerStyle?: never;
}

interface InputValueReference {
    value: string
}

interface InputRefNA {
    focus(): void;
}

const Input: React.RefForwardingComponent<InputRefNA, InputProps> = (
  {
    name, icon, containerStyle = {}, ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<never>(null);
  const {
    registerField, defaultValue = '', fieldName, error,
  } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      // eslint-disable-next-line no-shadow
      setValue(ref: never, value: string) {
        inputValueRef.current.value = value;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? `${colors.gray}` : `${colors.gray_dark}`}
      />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor={colors.gray_dark}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
