import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Image = styled.View`
  margin: 55% 0 0;
`;

export const Text = styled.View`
  align-items: center;
  justify-content: space-around;
  margin: 10% 0;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.black};
  font-family: "NotoSans_700Bold";
`;

export const Message = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  font-family: "NotoSans_400Regular";
  margin: 15px 0 20%;
`;