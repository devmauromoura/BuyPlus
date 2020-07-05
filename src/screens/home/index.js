import React, { Component } from 'react';
import {
    Safe,
    Scroll,
    Container,
    Header,
    LastListContainer,
    Body,
    Footer,
    LastTitle,
    Card,
    CardText,
    Button,
    ButtonText,
    ButtonIcon
} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
    async componentDidMount() {
        const { navigation } = this.props;
        const name = await AsyncStorage.getItem('@user/name');
        console.log('SDNAD', name)
            navigation.setOptions({
                headerTitle: `Olá ${name ? name : 'usuário'}.`,
                headerLeft: false
            });
    }
    render() {
        return (
            <Safe>
                <Scroll>
                    <Container>
                        <Header>
                            <LastListContainer>
                                <LastTitle>Últimas Listas</LastTitle>
                                <Card>
                                    <CardText>Jantar de Aniversário</CardText>
                                    <CardText> - </CardText>
                                    <CardText>há 5 dias</CardText>
                                </Card>
                                <Card>
                                    <CardText>Jantar de Aniversário</CardText>
                                    <CardText> - </CardText>
                                    <CardText>há 5 dias</CardText>
                                </Card>
                                <Card>
                                    <CardText>Jantar de Aniversário</CardText>
                                    <CardText> - </CardText>
                                    <CardText>há 5 dias</CardText>
                                </Card>
                                <Card>
                                    <CardText>Jantar de Aniversário</CardText>
                                    <CardText> - </CardText>
                                    <CardText>há 5 dias</CardText>
                                </Card>
                                <Card>
                                    <CardText>Jantar de Aniversário</CardText>
                                    <CardText> - </CardText>
                                    <CardText>há 5 dias</CardText>
                                </Card>
                            </LastListContainer>
                        </Header>
                        <Body>
                            <Button>
                                <ButtonIcon name="format-list-bulleted" />
                                <ButtonText>LISTAS</ButtonText>
                            </Button>
                            <Button onPress={() => navigation.navigate('Products')}>
                                <ButtonIcon name="folder-plus" />
                                <ButtonText>PRODUTOS</ButtonText>
                            </Button>
                            <Button>
                                <ButtonIcon name="cogs" />
                                <ButtonText>CONF.</ButtonText>
                            </Button>
                        </Body>
                    </Container>
                </Scroll>
            </Safe>
        );
    }

}

export default Home;