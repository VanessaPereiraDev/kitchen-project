import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Ingredients = () => {
    return (
        <Section>
            <Subtitle>
                <h2>Ingredientes</h2>
            </Subtitle>
            <Container>
                <Agrupar>
                    <Row>
                        <Item>
                            <Item1>
                                <img src="/images/tomate.png" />
                            </Item1>
                            <p>2 Tomates</p>
                        </Item>
                        <Item>
                            <Item2>
                                <img src="/images/salmao.png" />
                            </Item2>
                            <p>250g de Salmão</p>
                        </Item>
                        <Item>
                            <Item3>
                                <img src="/images/espargos.png" />
                            </Item3>
                            <p>100g de Espargos</p>
                        </Item>
                        <Item>
                            <Item4>
                                <img src="/images/massa.png" />
                            </Item4>
                            <p>150g de Massa</p>
                        </Item>
                    </Row>
                    <Row>
                        <Item>
                            <Item5>
                                <img src="/images/limao.png" />
                            </Item5>
                            <p>1 Limão</p>
                        </Item>
                        <Item>
                            <Item6>
                                <img src="/images/salsa.png" />
                            </Item6>
                            <p>18g de Salsa</p>
                        </Item>
                        <Item>
                            <Item7>
                                <img src="/images/pimenta.png" />
                            </Item7>
                            <p>Pimenta Preta</p>
                        </Item>
                        <Item>
                            <Item8>
                                <img src="/images/alho.png" />
                            </Item8>
                            <p>2 Dentes de alho</p>
                        </Item>
                    </Row>
                </Agrupar>
                <Seta>
                    <img src="/images/next.png" />
                </Seta>
            </Container>
        </Section>
    )
}

export default Ingredients;

const Section = styled.div`

`

const Subtitle = styled.div`
    margin-bottom: 70px;

    h2 {
        position: relative;
        left: 34%;
        font-family: 'Oswald';
        font-size: 25px;
        font-weight: 300;
        letter-spacing: 1.4px;
    }
`

const Container = styled.div`
    position: relative;
    left: 34%;
    display: flex;
    align-items: center;
`

const Agrupar = styled.div`
    
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
        margin-right: 40px;
        margin-bottom: 40px;
        font-size: 14px; 
    }
`

const Item1 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 100px;
    }
`

const Item2 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 100px;
    }
`

const Item3 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 70px;
    }
`

const Item4 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;   

    img {
        width: 90px;
    }
`

const Item5 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 80px;
    }
`

const Item6 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 70px;
    }
`

const Item7 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-bottom: 10px;

    img {
        width: 65px;
    }
`

const Item8 = styled.div`
    height: 130px;
    width: 130px;
    background-color: #283046;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    margin-bottom: 10px;

    img {
        width: 55px;
    }
`

const Seta = styled.div`
    img {
        width: 28px;
        cursor: pointer;
        animation: slide1 2s ease-in-out infinite;

        @keyframes slide1 {
            0%,
            100% {
              transform: translate(0, 0);
            }
          
            50% {
              transform: translate(10px, 0);
            }
        }  
    }
`