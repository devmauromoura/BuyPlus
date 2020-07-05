import styled from 'styled-components';
import colors from '../../../../../assets/colors';

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

export const InputContainer = styled.View`
        width: 100%;
        margin-bottom: 10px;
`;
export const LabelContainer = styled.Text`
    color: ${colors.textwhite};
    font-size: 16px;
    font-weight: bold;
`;
export const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    margin-top: 5px;
    background-color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: ${colors.button};
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
export const ButtonText = styled.Text`
    color: ${colors.textwhite};
    font-size: 16px;
    font-weight: bold;
`;