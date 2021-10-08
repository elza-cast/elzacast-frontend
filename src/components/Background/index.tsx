import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import {
  Container,
} from './styles';

interface BackgroudProps extends ViewProps {
    children: ReactNode[] | ReactNode
}

const Background: React.FC<BackgroudProps> = ({ children, ...props }: BackgroudProps) => (
  <Container
    colors={['#FF73F3', '#6695FF']}
    start={[0.0, 1.0]}
    end={[1.0, 1.0]}
    {...props}
  >
    {children}
  </Container>
);

export default Background;
