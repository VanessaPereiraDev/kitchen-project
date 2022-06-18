import react from 'react';
import styled from 'styled-components';
import Carousel from '../../components/views/bebidas/carousel';
import HeaderDrinks from '../../components/views/bebidas/header';
import Quantidade from '../../components/views/section/quantidade-drink';
import Footer from '../../components/views/footer/footer';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <Section>
            <HeaderDrinks/>        
            <Fade top duration={3000}>
                <Subtitle>
                    <h2>Variedades</h2>
                </Subtitle>
                <Carousel />
            </Fade>
            <Quantidade/>
            <Footer/>
        </Section>
    )
}

export default Home;

const Section = styled.div`
  
`

const Subtitle = styled.div`
    position: absolute;    
    left: 36%;
    top: 0%;
    margin-bottom: 10px;
    z-index: 1;

    h2 {
        font-family: 'Oswald';
        font-weight: 200;
        font-size: 24px;
        letter-spacing: 1.5px;
    }
`


