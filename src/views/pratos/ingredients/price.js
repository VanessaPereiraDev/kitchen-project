import React, {useState} from "react";
import styled from "styled-components";

const Price = () => {

    const [persons, setPersons] = useState(1)

    const add = () => {
        setPersons(persons => persons + 1);
    }

    const remove = () => {
        //setPersons(persons => persons - 1);
        if (persons > 0) {
            setPersons(persons => persons - 1);
        }
    }

    return (
        <SideSection>
            <Content>
                <img id="image" src="/images/prato.png" />
                <h3>Salmão Fumado</h3>
                <p>1 Prato</p>
                <h4>25 €</h4>
                <Posicionar>
                    <p id="pessoas">{persons}</p>
                    <Contador>
                        <img id="fav" src="/images/coracao.png" />
                        <img onClick={() => remove()} src="/images/menos.png" />
                        <img src="/images/vazio.png" />
                        <img onClick={() => add()} src="/images/mais.png" />
                    </Contador>
                </Posicionar>
                <Button>
                    Pedir agora
                </Button>
            </Content>
        </SideSection>
    )
}

export default Price;

const SideSection = styled.div`
    height: 320px;
    width: 280px;
    background: #283046;
    border-radius: 25px;
    position: absolute;
    left: 80px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    #image {
        margin-top: 20px;
    }

    h3 {
        margin-top: 7px;
    }

    p {
        font-size: 14px;
        color: #DCDCDC;
        margin-bottom: 5px;
    }

    #pessoas {
        color: #000;
        font-size: 14px;
        position: absolute;
        top: 18px;
        left: 87px; 
        z-index: 1;
    }
`

const Posicionar = styled.div`
    position: relative;
    display: inline-block;
`

const Contador = styled.div`
    padding: 15px 20px 5px 20px;
    position: relative;
    left: -25px;

    img {
        height: 25px;
        width: 30px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    #fav {
        margin-right: 25px;
        width: 25px; 
    }
`

const Button = styled.div`
    width: 125px;
    height: 40px;
    background: #49BC74;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center; 
    cursor: pointer;

    &:hover {
        background: #3a965c;
    }
`

