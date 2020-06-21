import React from 'react';
import { 
    Safe,
    Scroll,
    Container,
    Card,
    CardContainer,
    CardTextContainer,
    CardText
} from './styles';

const Products = (props) => {
    const { navigation } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Produtos',
        });
      }, [navigation]);

    return(
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

export default Products;