import React from "react";
import styled from "styled-components";

const HeaderFood = () => {
    return (
        <Container>
            <Img src="/images/Roulette.png" />
            <Title>
                <h1>Salmão <span>Fumado</span></h1>
            </Title>
        </Container>
    )
}

export default HeaderFood;

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 400px;
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

