import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import metrics from '../../styles/metrics';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding-top: ${metrics.headerHeight};
`;
