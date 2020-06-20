import styled from 'styled-components';
import colors from '../../../../../assets/colors';
import Modal from 'react-native-modal';

export const Mod = styled(Modal)`
    flex: 1;
    align-items: center;
`;

export const Container = styled.View`
    width: 90%;
    background-color: ${colors.backgroundsecondary};
    padding: 10px;
    align-items: center;
    border-radius: 3px;
`;

export const Message = styled.Text`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${colors.textred};
`;

export const Input = styled.TextInput`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 3px;
    margin-bottom: 5px;
    padding-vertical: 5px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
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
