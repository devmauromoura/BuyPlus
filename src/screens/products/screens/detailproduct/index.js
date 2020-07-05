import React, { Component } from 'react';
import {
    Safe,
    Scroll,
    Container,
    InputContainer,
    LabelContainer,
    Input,
    Button,
    ButtonText
} from './style';

class DetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        const { navigation, route } = this.props;
        const { type } = route.params;
        navigation.setOptions({
            headerTitle: `${type === 'new' ? 'Novo Produto' : 'Produto Detalhado'}`,
        });
    }
    
    render() {
        return (
            <Safe>
                <Scroll>
                    <Container>
                        <InputContainer>
                            <LabelContainer>Nome do Produto</LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Categoria</LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Und. Medida</LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Valor</LabelContainer>
                            <Input />
                        </InputContainer>
                        <Button>
                            <ButtonText>SALVAR</ButtonText>
                        </Button>
                    </Container>
                </Scroll>
            </Safe>
        );
    }
    
};

export default DetailProduct;