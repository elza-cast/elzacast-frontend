import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: ${colors.white};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${colors.gray_light};
  flex-direction: row;
  align-items: center;
  ${(props: { isErrored: any; }) => props.isErrored
    && css`
      border-color: ${colors.red};
    `}
  ${(props: { isFocused: any; }) => props.isFocused
    && css`
      border-color: ${colors.gray};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.black};
  font-size: 16px;
  font-family: "NotoSans_400Regular";
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
