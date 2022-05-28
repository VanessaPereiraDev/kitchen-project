import React from "react";
import styled from 'styled-components';

const Search = () => {
    return (
        <Container>
            <p id="title">Procurar pratos</p>
            <form class="search" action="">
                <input type="search" placeholder="Salmão Fumado" onfocus="this.value=''"/>
                <button type="submit"><img src="images/lupa.png" /></button>
            </form>
            <Row style={{display: 'flex'}}>
                <div id="box">
                    <p>Frango</p>
                </div>
                <div id="box">
                    <p>Vegetais</p>
                </div>
                <div id="box">
                    <p>Legumes</p>
                </div>
            </Row>
            <Sugestion>
                <div id="group">
                    <h5>Salmão Fumado</h5>
                    <p>Espargos, Tomate, Limão, Massa Fusilli</p>
                </div>
                <div id="group">
                    <h5>Salmão Fumado à moda da casa</h5>
                    <p>Espargos, Tomate, Limão, Massa Fusilli, tomilho</p>
                </div>
                <div id="group">
                    <h5>Salmão Fumado vegetariano</h5>
                    <p>Salmão vegetariano, Ovo, Espargos, Tomate</p>
                </div>
                <div id="group">
                    <h5>...</h5>
                </div>
            </Sugestion>
        </Container>
    )
}

export default Search;

const Container = styled.div`
    background: #283046;
    padding: 30px 25px;
    border: #707070;
    border-radius: 15px;
    width: 270px;
    height: 380px;
    position: absolute;
    left: 5%;

    #title {
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.8px;
    }

    .search {
        width: 220px;
        height: 35px;
        margin: 30px auto 15px auto;
        border-radius: 20px;
        border: 1px solid #F5F5F5;
        position: relative;
        
        input {
          width: 200px;
          padding: 10px 10px;
          float: left;
          color: #ccc;
          border: 0;
          background: transparent;
          border-radius: 3px 0 0 3px;
          
          &:focus {
            outline: 0;
            background: transparent;
          }

            ::placeholder {
                font-family: 'Open Sans';
                font-weight: 600;
                font-size: 14px;
                color: #fff;
                letter-spacing: 1.1px;
            }
        }
        
        button {
          position: absolute;
          right: 0;
          border: 0;
          padding: 0;
          cursor: pointer;
          height: 40px;
          width: 40px;
          color: #fff;
          background: transparent;

          img {
              width: 18px;
          }
    } 
`

const Row = styled.div`
    margin-bottom: 38px;

    #box {
        width: 95px;
        height: 22px;
        background: #6FAB6D;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;

        p {
            font-size: 10px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`

const Sugestion = styled.div`
    #group {
        margin-bottom: 20px;
        cursor: pointer;

        h5 {
            font-family: 'Open Sans';
        }

        p {
            font-size: 10px;
        }
    }
`