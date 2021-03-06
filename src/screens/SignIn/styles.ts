import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px ${Platform.OS === 'android' ? 80 : 40}px;
  
  background-color: ${colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-family: "NotoSans_700Bold";
  margin: 0 0 15% 0;
`;
