import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../styles/colors';

export const Container = styled(RectButton)`
  height: 48px;
  width: 164px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${colors.gray_light};
  
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-family: "NotoSans_400Regular";
  color: ${colors.gray};
  font-size: 18px;
`;
