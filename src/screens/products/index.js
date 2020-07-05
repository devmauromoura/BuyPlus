import React, { Component } from 'react';
import {
    Safe,
    Scroll,
    Container,
    Card,
    CardContainer,
    CardTextContainer,
    CardText,
    HeaderButton,
    HeaderButtonIcon
} from './styles';

class Products extends Component {
    componentDidMount(){
        const { navigation } = this.props;
        navigation.setOptions({
            headerTitle: 'Produtos',
            headerRight: () => (
                <HeaderButton onPress={() => navigation.navigate('DetailProducts', {type: 'new'})}>
                    <HeaderButtonIcon name="plus"/>
                </HeaderButton>
            )
        });    
    }
    render() {
        return (
            <Safe>
                <Scroll>
                    <Container>
                        <Card>
                            <CardTextContainer>
                                <CardText>#001</CardText>
                                <CardContainer>
                                    <CardText>Coca Cola</CardText>
                                    <CardText>Refrigerante</CardText>
                                </CardContainer>
                                <CardContainer>
                                    <CardText>Unidade</CardText>
                                    <CardText>R$ 8,20</CardText>
                                </CardContainer>
                            </CardTextContainer>
                        </Card>
                    </Container>
                </Scroll>
            </Safe>
        )
    }
}

export default Products; ''