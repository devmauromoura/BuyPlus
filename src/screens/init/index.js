import React, { useState } from 'react';
import {
    Safe,
    Scroll,
    Container,
    Header,
    Body,
    Message,
    Logo,
    ButtonContainer,
    Button,
    ButtonText,
    Footer,
    TextVersion
} from './styles';
import logo from '../../assets/img/logo.png';
import * as Animatable from 'react-native-animatable';
import { Modal } from './components/modalname';

const IndexScreen = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');

    return (    
        <Safe>
            <Scroll>
                <Container>
                    <Animatable.View animation="fadeInLeft">
                        <Header />
                        <Body>
                            <Logo source={logo} resizeMode="contain" />
                            <Message>Seja bem vindo(a) ao BuyPlus</Message>
                            <Message>O seu aplicativo de lista de compras.</Message>
                            <ButtonContainer>
                                <Button onPress={() => setVisible(true)}>
                                    <ButtonText>PRONTO</ButtonText>
                                </Button>
                            </ButtonContainer>
                        </Body>
                        <Footer>
                            <TextVersion></TextVersion>
                        </Footer>
                    </Animatable.View>
                    <Modal visible={visible} text={name} setText={setName} close={setVisible}/>
                </Container>
            </Scroll>
        </Safe>
    )
}

export default IndexScreen;