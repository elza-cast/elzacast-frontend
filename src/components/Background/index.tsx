import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import {
  Container,
} from './styles';
import colors from '../../styles/colors';

interface BackgroudProps extends ViewProps {
    children: ReactNode[] | ReactNode
}

const Background: React.FC<BackgroudProps> = ({ children, ...props }: BackgroudProps) => (
  <Container
    colors={[`${colors.pink}`, `${colors.blue}`]}
    start={[0.0, 1.0]}
    end={[1.0, 1.0]}
    {...props}
  >
    {children}
  </Container>
);

export default Background;
