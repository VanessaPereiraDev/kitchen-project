import react, {useState} from 'react';
import styled from 'styled-components';
//components
import Infoenerg from '../../components/views/pratos/infoenerg1';
import HeaderFood from '../../components/views/pratos/header';
import InfoDetalhe from '../../components/views/pratos/infoenerg2';
import HorizBar from '../../components/views/section/barras';
//react-reveal
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const InfoEnergeticas = () => {

    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);

    return (
        <Section>
            <HeaderFood/>
            <Subtitle>
              <h2>Valor Energético</h2>
            </Subtitle>
            <Container onClick={() => { setFirst(!first); setSecond(!second) }}>
                {first &&
                    <Fade top>
                        <Infoenerg/>
                        <Image>
                            <img src="/images/carbonara1.png" />
                        </Image>
                    </Fade>
                }
            </Container>
            {first &&
                <Click>
                    <img src="/images/click.png" />
                </Click>
            }
            {second && 
                <Zoom>
                    <InfoDetalhe/>
                </Zoom>
            }
            <HorizBar/>
        </Section>
    )
}

export default InfoEnergeticas;

const Section = styled.div`
  
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(90deg);
    position: relative;

    &:hover {
        cursor: pointer;
    }
`

const Image = styled.div`
    img {
        margin-top: 15px;
        width: 340px;
    }
`

const Click = styled.div`
    position: absolute;
    left: 53%;
    top: 96%;
    z-index: 1;

    img {
        width: 35px;
        animation: blink 2.5s;
        animation-iteration-count: infinite;

        @keyframes blink {
        0% {
          opacity: 1;
        }
  
        50% {
          opacity: 0;
        }
  
        100% {
          opacity: 1;
        }
      } 
    }
`
