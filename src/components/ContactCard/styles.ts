import styled from 'styled-components/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  width: 100%;
  height: 90px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
    
  border: 1px solid ${colors.gray_light};
`;

export const InfoArea = styled.View`
  margin-left: 14px;
`;

export const Name = styled.Text`
  font-family: "NotoSans_400Regular";
  font-size: 22px;
  
  color: ${colors.gray_dark};
`;

export const Phone = styled.Text`
  font-family: "NotoSans_400Regular";
  font-size: 20px;
  
  color: ${colors.gray_dark};
`;

export const DeleteArea = styled.TouchableOpacity`
`;

export const Awesome = styled(AwesomeIcon)`
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
