import styled from 'styled-components';
import colors from '../../../assets/colors';
import {Dimensions} from 'react-native';

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

export const Card = styled.TouchableOpacity`
    width: 100%;
    height: ${Dimensions.get('screen').height / 10}px;
    background-color: ${colors.backgroundsecondary};
`;

export const CardContainer = styled.TouchableOpacity`
    align-items: center;
`;

export const CardTextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const CardText = styled.Text`
    font-size: 17px;
    margin-right: 10px;
`;