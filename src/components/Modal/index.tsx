import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import {
  Container,
} from './styles';

interface ModalProps extends ViewProps {
    children: ReactNode[] | ReactNode
}

const Background: React.FC<ModalProps> = ({ children, ...props }: ModalProps) => (
  <Container
    {...props}
  >
    {children}
  </Container>
);

export default Background;
