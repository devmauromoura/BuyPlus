import React, { useState, Component } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import { Modal } from './components/modalname';

class IndexScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            name: ''
        }
    }

        async componentDidMount(){
            const { navigation } = this.props;
            const name = await AsyncStorage.getItem('@user/name');

            if(name){
                navigation.navigate('Home');
            }
        }

     nextpage = async() => {
        const { navigation } = this.props;
        const { name } = this.state;
        if(name.length >= 1){
            await AsyncStorage.setItem('@user/name', name);
            navigation.navigate('Home');
        }
    }
    render(){
        const { name, visible } = this.state;
    return (    
        <Safe>
            <Scroll>
                <Container>
                    <Animatable.View animation="fadeInLeft">
                        <Header />
                        <Body>
                            <Logo source={logo} resizeMode="contain" />
                            <Message>Seja bem vindo(a) ao BuyPlus</Message>
                            <Message>O seu aplicativo para lista de compras.</Message>
                            <ButtonContainer>
                                <Button onPress={() => this.setState({ visible: true})}>
                                    <ButtonText>PRONTO</ButtonText>
                                </Button>
                            </ButtonContainer>
                        </Body>
                        <Footer>
                            <TextVersion></TextVersion>
                        </Footer>
                    </Animatable.View>
                    <Modal visible={visible} text={name} setText={val => this.setState({name: val})} close={() => this.setState({visible: false})} save={() => this.nextpage()}/>
                </Container>
            </Scroll>
        </Safe>
    )
}
}

export default IndexScreen;