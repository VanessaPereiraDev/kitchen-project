import react from 'react';
import styled from "styled-components";
import HeaderFood from '../../components/views/pratos/header';
import Ingredients from '../../components/views/pratos/ingredients';
import Quantidade from '../../components/views/section/quantidade-food';

const Ingredientes = () => {
    return (
        <Section>
            <HeaderFood/>
            <Ingredients/>
            <Quantidade/>
        </Section>
    )
}

export default Ingredientes;

const Section = styled.div`

`