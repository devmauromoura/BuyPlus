import { Dimensions } from 'react-native';
import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Safe = styled.SafeAreaView`
    flex: 1;
`;
export const Scroll = styled.ScrollView`
    flex: 1;
    background-color: ${colors.background};
`;
export const Container = styled.View`
    padding: 10px;
`;

export const Header = styled.View``;

export const Body = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    max-height: ${Dimensions.get('screen').height/ 4}px;
    margin-left: -35px;
`;
export const Message = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.textwhite}
`;

export const ButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 10px;
`;
export const Button = styled.TouchableOpacity`
    width: 70%;
    height: 40px;
    background-color: ${colors.button};
    justify-content: center;
    align-items: center;
    borderRadius: 3px;
`;
export const ButtonText = styled.Text`
    font-weight: bold;
    color: ${colors.textwhite}
`;

export const Footer = styled.View``;
export const TextVersion = styled.Text``;