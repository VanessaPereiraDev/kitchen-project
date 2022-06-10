import react from 'react'
import styled from 'styled-components';
import HeaderFood from '../../components/views/pratos/header';
import HeaderDetalhe from '../../components/views/pratos/headerDetalhe';
import Back from '../../components/views/pratos/seta';
import TodosPratos from '../../components/views/pratos/todospratos';
import Geral from '../../components/views/section/geral';

const Inicio = () => {
    return (
        <Content>
            <HeaderFood/>
            <HeaderDetalhe/>
            <TodosPratos/>
            <Geral/>
            <Back/>
        </Content>
    )
}

export default Inicio;

const Content = styled.div`
    height: 100vh;
`