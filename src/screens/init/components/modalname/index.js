import React from 'react';
import {Alert} from 'react-native';
import {
    Mod,
    Container,
    Message,
    Input,
    ButtonContainer,
    Button,
    ButtonText
} from './styles';

export const Modal = (props) => {
    const { visible, text, setText, save, close } = props;
    return(
        <Mod isVisible={visible} onBackdropPress={() => close()}>
            <Container>
                <Message>Qual o seu nome?</Message>
                <Input value={text} onChangeText={val => setText(val)}/>
                <ButtonContainer>
                    <Button onPress={() => {
                        close(false);
                        save();
                    }}>
                        <ButtonText>SALVAR</ButtonText>
                    </Button>
                </ButtonContainer>
            </Container>
        </Mod>
    )
} 