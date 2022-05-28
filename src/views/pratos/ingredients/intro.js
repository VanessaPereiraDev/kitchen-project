import React from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const Intro = () => {
    return (
        <Container>
            <Img src="/images/Roulette.png" />
            <Title>
            <h1>Salmão <span>Fumado</span></h1>
            </Title>
            <Link to="/home"><Arrow src="/images/curve-down-arrow.png" /></Link>
        </Container>
    )
}

export default Intro;

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 380px;
    height: auto;
`

const Title = styled.div`
    h1 {
        font-family: 'Open Sans';
        font-weight: 300;
        font-size: 45px;
        letter-spacing: 1px;
        margin-left: 80px;
    }

    span {
        font-weight: 600;
    }
`

const Arrow = styled.img`
    width: 32px;
    position: absolute;
    right: 10%;
    cursor: pointer;

    &:hover {
        transform: translateY(2px);
    }
`