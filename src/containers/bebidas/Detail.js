import react from 'react';
import styled from 'styled-components';
import Detalhe from '../../components/views/bebidas/details';
import HeaderDrinks from '../../components/views/bebidas/header';
import Receita from '../../components/views/section/receita';

const Detail = () => {
    return (
        <Section>
            <HeaderDrinks/>
            <Detalhe/>
            <Receita/>
        </Section>   
    )
}

export default Detail;

const Section = styled.div`

`
