import React from 'react';
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

const Home = (props) => {
    const { navigation } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Olá Fulano!',
            headerLeft: false
        });
      }, [navigation]);

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
                            <ButtonIcon name="format-list-bulleted"/>
                            <ButtonText>LISTAS</ButtonText>
                        </Button>
                        <Button>
                            <ButtonIcon name="folder-plus"/>
                            <ButtonText>PRODUTOS</ButtonText>
                        </Button>
                        <Button>
                            <ButtonIcon name="cogs"/>
                            <ButtonText>CONF.</ButtonText>
                        </Button>
                    </Body>
                </Container>
            </Scroll>
        </Safe>
    );
}

export default Home;