import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  padding: 10% 6%;
  border-radius: 15px;
  overflow: scroll;
  
  border: 1px solid ${colors.gray_light}
`;
