import React, {useState} from "react";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link, useNavigate} from "react-router-dom";

const Main = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
    };
    
    const items = [
      <div id="img1" className="item" data-value="1">
        <img src="/images/long-island1.png"/>
        <p>Tequila Sunrise</p>
      </div>,
      <div id="img1" className="item" data-value="2">
        <img src="/images/pina-colada1.png" />
        <p>Pina Colada</p>
      </div>,
      <div id="img1" className="item" data-value="3">
        <img src="/images/tequila-sunrise1.png" onClick={handleShow} />
        <p>Cosmopolitan</p> 
      </div>,
      <div id="img1" className="item" data-value="4">
        <img src="/images/blue-lagoon1.png" />
        <p>Blue Lagoon</p>
      </div>,
      <div id="img1" className="item" data-value="5">
        <img src="/images/mojito1.png" />
        <p>Mojito</p>
      </div>, 
      <div id="img1" className="item" data-value="6">
        <img src="/images/green-cocktail1.png" />
        <p>Mojito</p>
      </div>, 
      <div id="img1" className="item" data-value="7">
        <img src="/images/cosmopolitan1.png" />
        <p>Mojito</p>
      </div>,  
      <div id="img1" className="item" data-value="8">
        <img src="/images/pink-cocktail1.png" />
        <p>Mojito</p>
      </div> 
    ];

    return (
        <Section>
          <Subtitle>
              <h2>Variedades</h2>
          </Subtitle>
          <Row>
            <LeftArrow>
                <img src="/images/left.png" />
            </LeftArrow>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
            {show && 
              <div id="card">
                <img id="close" src="/images/cancel.png" onClick={handleClose} />
                <h3>Cosmopolitan</h3>
                <p>58 Kcal</p>
                <img id="drink" src="/images/tequila-sunrise.png" />
                <Link to="/detail" style={{ textDecoration: 'none' }}>
                  <button>Ver detalhes</button>
                </Link>
              </div>
            }
            <RightArrow>
                <img src="/images/right.png" />
            </RightArrow>
            <Cursor>
              <img class="blink" src="/images/click.png" />
            </Cursor>
          </Row> 
      </Section>
    );
}

export default Main;

const Section = styled.div`
  
`

const Subtitle = styled.div`
    margin-bottom: 40px;

    h2 {
        position: relative;
        left: 35%;
        font-family: 'Roboto';
        font-weight: 200;
        font-size: 22px;
        letter-spacing: 1px;
    }
`

const Row = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    left: 28%;
    margin-top: 50px;
`

const LeftArrow = styled.div`
    img {
      width: 48px;
      cursor: pointer;
    }
`

const RightArrow = styled.div`
    img {
      width: 48px;
      cursor: pointer;
    }
`

const Cursor = styled.div`
    z-index: 1;
    position: absolute;
    left: 26%;    

    img {
      width: 38px;
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

