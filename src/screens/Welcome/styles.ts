import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-family: "NotoSans_700Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 10%;
  text-align: center;
  
  color: ${colors.white};
`;

export const Paragraph = styled.Text`
  font-family: "NotoSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 8%;

  color: ${colors.gray_dark};
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20% 0;
`;
