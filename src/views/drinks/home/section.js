import React, {useState} from "react";
import styled from "styled-components";

const Section = () => {

    const [fav, setFav] = useState(false);

    const [persons, setPersons] = useState(1)

    const add = () => {
        setPersons(persons => persons + 1);
    }

    const remove = () => {
        if (persons > 0) {
            setPersons(persons => persons - 1);
        }
    }

    return (
        <SideSection>
            <Detail>
                <p>Cocktails</p>
                <h3>9€</h3>
            </Detail>
            <Content>
                <img id="image" src="/images/tequila-sunrise.png" />
                <h4>Cosmopolitan</h4>
                <p>1 copo</p>
                <Posicionar>
                    <p id="pessoas">{persons}</p>
                    <Contador>
                        <img id="fav" src="/images/coracao.png" onClick={() => { setFav(!fav) }} />
                        {fav && 
                        <img id="fav" src="/images/heart.png" />
                        }
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

export default Section;

const SideSection = styled.div`
    height: 340px;
    width: 300px;
    background: #283046;
    border-radius: 25px;
    position: absolute;
    left: 80px;
`

const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;

    p {
        font-family: "Open Sans";
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 120px;
        margin-bottom: 15px;
    }

    h4 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        margin-top: 3px;
    }

    #pessoas {
        color: #000;
        font-size: 14px;
        position: absolute;
        top: 15px;
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
