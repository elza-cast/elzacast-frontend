import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  width: 100%;
  height: 90px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${colors.purple};
`;

export const InfoArea = styled.View`
  border-radius: 15px;
  padding: 5px 25px;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Phone = styled.Text`
  font-size: 20px;
`;

export const DeleteArea = styled.TouchableOpacity`
  height: 100%;
  width: 20%;
`;
