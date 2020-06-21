import { Dimensions } from 'react-native';
import styled from 'styled-components';
import colors from '../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
export const LastListContainer = styled.View`
    height: ${Dimensions.get('screen').height / 5}px;
    width: 100%;
    align-items: center;
    padding: 5px;
    background-color: ${colors.backgroundsecondary};
    border-radius: 3px;
`;

export const LastTitle = styled.Text`
    color: ${colors.textred};
    font-size: 17px;
    font-weight: bold;
`;

export const Card = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

export const CardText = styled.Text`
        font-size: 15px;
`;

export const Body = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
    width: ${Dimensions.get('screen').width / 3 - 15}px;
    height: ${Dimensions.get('screen').height / 7}px;
    background-color: ${colors.buttonsecondary};
    margin-bottom: 10px;
    border-radius: 3px;
    border-width: 2px;
    border-color: ${colors.buttonborder};
`;
export const ButtonText = styled.Text``;

export const ButtonIcon = styled(Icon)``;