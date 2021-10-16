import styled from 'styled-components/native';
import { Platform } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 80px 20px ${Platform.OS === 'android' ? 80 : 40}px;
    
  background-color: ${colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  font-family: "NotoSans_700Bold";
  margin-bottom: 10%;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
  bottom: 0;
  position: absolute;
  margin-bottom: 6%;
`;

export const List = styled.View`
  width: 100%;
`;

export const Awesome = styled(AwesomeIcon)`
  margin-bottom: 30px;
`;

export const Paragraph = styled.Text`
  font-family: "NotoSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  max-width: 100%;
  margin-bottom: 8%;
  text-align: center;
  padding: 0 20px;

  color: ${colors.gray_dark};
`;

export const BlankStage = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ContainerList = styled.View`
  align-items: center;
  margin-bottom: 100px;
`;
