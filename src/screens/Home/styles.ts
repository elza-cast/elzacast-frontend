import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 20%;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const TextHeader = styled.Text`
  font-family: "NotoSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  
  color: ${colors.white};
`;

export const TextHeaderBold = styled.Text`
  font-family: "NotoSans_700Bold";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  
  color: ${colors.white};
`;

export const Icon = styled(FeatherIcon)`
  margin-left: 10px;
`;

export const Awesome = styled(AwesomeIcon)`
  margin-bottom: 10px;
`;

export const ContainerSignOut = styled.View`
  flex-direction: row;
`;

export const SignOutButton = styled.TouchableOpacity`
`;

export const ContainerModal = styled.View`
  flex: 1;
  padding: 0 20px ${Platform.OS === 'android' ? 80 : 40}px;
  width: 100%;
  
  top: 0;
  position: absolute;
  margin-top: 35%;
`;

export const Title = styled.Text`
  font-family: "NotoSans_700Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 20px;
  
  color: ${colors.black};
`;

export const Paragraph = styled.Text`
  font-family: "NotoSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 15px;
  
  color: ${colors.gray_dark};
`;

export const Actions = styled.View`
`;

export const GroupButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButton = styled.View`
   justify-content: center;
   align-items: center;
   padding: 15px;
`;

export const EmergencyButton = styled.TouchableOpacity`
  width: 264px;
  height: 105px;
  border-radius: 15px;
  margin-bottom: 15px;
  
  background-color: ${colors.pink};
`;

export const AlertButton = styled.TouchableOpacity`
  width: 125px;
  height: 125px;
  border-radius: 15px;
  margin-bottom: 15px;
  
  background-color: ${colors.purple};
`;

export const ContactsButton = styled.TouchableOpacity`
  width: 125px;
  height: 125px;
  border-radius: 15px;
  margin-bottom: 15px;
  border: 1px solid ${colors.gray_light};
  
  background-color: ${colors.white};
`;

export const ForumButton = styled.TouchableOpacity`
  width: 264px;
  height: 105px;
  border-radius: 15px;
  
  background-color: ${colors.blue};
`;

export const TitleButton = styled.Text`
  font-family: "NotoSans_700Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;

  text-align: center;
  color: ${colors.white};
`;

export const BlackTitleButton = styled.Text`
  font-family: "NotoSans_700Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;

  text-align: center;
  color: ${colors.gray};
`;

export const ContentModal = styled.View`
  align-items: center;
`;
