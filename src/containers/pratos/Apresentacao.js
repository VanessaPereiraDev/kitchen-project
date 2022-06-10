import react from 'react';
import styled from 'styled-components';
import Carousel from '../../components/views/pratos/carousel';
import HeaderFood from '../../components/views/pratos/header';
import ProcurarPratos from '../../components/views/section/procurar';
import Fade from 'react-reveal/Fade';

const Apresentacao = () => {
    return (
        <Section>
          <HeaderFood/>
          <Fade top duration={3000}>
            <Subtitle>
                <h2>Informações Energéticas</h2>
            </Subtitle>
            <Carousel />
          </Fade>          
          <ProcurarPratos/> 
        </Section>
    )
}

export default Apresentacao;

const Section = styled.div`
  position: relative;
`

const Subtitle = styled.div`
    margin-bottom: 50px;

    h2 {
        position: relative;
        left: 34%;
        font-family: 'Oswald';
        font-weight: 200;
        font-size: 24px;
        letter-spacing: 1px;
    }
`
