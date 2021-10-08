import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: ReactNode;
}

const SmallPurpleButton: React.FC<ButtonProps> = ({ children, ...rest } : ButtonProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Container {...rest}>
    <Title>{children}</Title>
  </Container>
);

export default SmallPurpleButton;
