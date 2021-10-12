import styled from 'styled-components/native';
import colors from '../../styles/colors';

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

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const View = styled.View`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 25px;
  padding: 30px 20px;
`;


export const Paragraph = styled.Text`
  font-family: "NotoSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  margin: 0 0 12px;
  
  color: ${colors.gray_dark};
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

