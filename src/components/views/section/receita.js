import React from "react";
import styled from "styled-components";

const Receita = () => {
    return (
        <SideSection>
            <Detail>
                <h4>Informações</h4>
                <p>Receita</p>
            </Detail>
            <Content>
                <Rate>
                    <img src="/images/estrela.png" />
                    <img src="/images/estrela.png" />
                    <img src="/images/estrela.png" />
                    <img src="/images/estrela1.png" />
                    <img src="/images/estrela1.png" />
                </Rate>
                <Detalhe>
                    <Row>
                        <img src="/images/tigela.png" />
                        <p>6 ingredientes</p>
                    </Row>
                    <Row>
                        <img src="/images/relogio.png" />
                        <p>5 min</p>
                    </Row>
                    <Row>
                        <img src="/images/fire.png" />
                        <p>Fácil</p>
                    </Row>
                    <Row>
                        <img src="/images/congelar.png" />
                        <p>Não congelar</p>
                    </Row>
                </Detalhe>
            </Content>
        </SideSection>
    ) 
}


export default Receita;

const SideSection = styled.div`
    height: 300px;
    width: 280px;
    background: #283046;
    border-radius: 25px;
    position: absolute;
    left: 5%;
    bottom: 0%;
`

const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;

    p {
        font-family: "Open Sans";
        font-size: 15px;
    }
`

const Content = styled.div`
    
`

const Rate = styled.div`
    margin-left: 43px;
    margin-bottom: 40px;
    img {
        margin-right: 3px;
    }
`

const Detalhe = styled.div`
    margin-left: 45px;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 20px;
        margin-right: 10px;
    }
    
    p {
        font-family: 'Oswald';
        font-family: 14px;
        letter-spacing: 0.8px;
    }
`