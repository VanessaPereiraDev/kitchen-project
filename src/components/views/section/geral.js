import react from 'react'
import styled from 'styled-components'

const Geral = () => {
    return (
        <Container>
            <Detail>
                <h4>Geral</h4>
                <p>Ingredientes</p>
            </Detail>
            <div className='rate'>
                <h3>4.2</h3>
            </div>
            <Content>
                <h3>Chef Loureiro</h3>
                <p id="prato">Salmão Fumado</p>
                <p>Posta de salmão fumado com legumes frescos salteados.</p>
            </Content>
            <div className='buttons'>
                <button>Ver mais</button>
                <div id="fav">
                    <img src="/images/fav.png" />
                    <p>45</p>
                </div>
            </div>
        </Container>
    )
}

export default Geral;

const Container = styled.div`
    background: #283046;
    border: #707070;
    border-radius: 15px;
    width: 280px;
    height: 330px;
    position: absolute;
    right: 5%;
    top: 5%;

    .rate {
        width: 55px;
        padding: 12px;
        background: #bfe25a;
        text-align: center;
        border-radius: 16px;
        margin-left: 20px;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 35px 40px 30px 25px;
    
        button {
            background-color: transparent;
            padding: 6px 12px;
            color: #fff;
            font-size: 12px;
            letter-spacing: 1px;
            border: 1px solid #fff;
            border-radius: 15px;
            cursor: pointer;
        }
    }

    #fav {
        display: flex;
        align-items: center;

        img {
            height: 20px;
            margin-top: 2px;
            margin-right: 8px;
        }
    }
`

const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    letter-spacing: 1px;

    p {
        font-family: "Open Sans";
        font-size: 15px;
    }
`

const Content = styled.div`
    font-family: 'Open Sans';
    letter-spacing: 1px;
    margin-left: 20px;

    h3 {
        margin-top: 20px;
    }

    #prato {
        font-size: 12px;
        margin-top: 5px;
    }

    p {
        font-size: 14px;
        margin-top: 25px;
    }
`