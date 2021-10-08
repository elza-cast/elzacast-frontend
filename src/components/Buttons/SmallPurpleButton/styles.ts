import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../styles/colors';

export const Container = styled(RectButton)`
  height: 48px;
  width: 134px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  
  background-color: ${colors.purple};
`;

export const Title = styled.Text`
  font-family: "NotoSans_400Regular";
  color: ${colors.white};
  font-size: 18px;
`;
