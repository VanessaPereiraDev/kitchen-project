import React from "react";
import styled from "styled-components";
import Carousel from '../../../components/views/pratos/carousel';

const Home = () => {
    return (
        <Section>
          <Subtitle>
              <h2>Informações Energéticas</h2>
          </Subtitle>
          <Carousel />
        </Section>
    )
}

export default Home;

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


