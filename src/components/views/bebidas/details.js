import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Pagination } from "swiper";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

const Detalhe = () => {
    return (
        <Detail>
            <Alinhar>
                <Subtitle>
                    <h2>Cosmopolitan</h2>
                </Subtitle>
                <Fav>
                    <img src="/images/coracao.png" />
                </Fav>
            </Alinhar>
            <Information>
                <Image>
                    <img src="/images/long-island.png" />
                    <p>Preço<span id="price">9,5 €</span><br/><span id="info">(disponível apenas por reserva)</span></p>
                </Image>
                <Right>
                    <Text>
                        <h3>Ingredientes</h3>
                        <p>. 50ml de vodka</p>
                        <p>. 25ml triple sec (ou contreau)</p>
                        <p>. 25ml de suco de limão</p>
                        <p>. 25ml de suco de cranberry</p>
                        <p>. 1 fatia de casca de limão</p>
                        <p>. gelo triturado</p>
                    </Text>
                    <MoreInfo>
                        <div id="group">
                            <img src="/images/fire.png" />
                            <p>58 Kcal</p>
                        </div>
                        <div id="group">
                            <img src="/images/relogio.png" />
                            <p>5 min</p>
                        </div>
                        <div id="group">
                            <img src="/images/nivel.png" />
                            <p>Fácil</p>
                        </div>
                    </MoreInfo>
                </Right>
            </Information>
            <Button>
                <Link to='/preparacao'>
                    <button id="btn2">VER RECEITA</button>
                </Link>
                <button id="btn1">COMPRAR</button>
            </Button>
            {/** 
                <>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide id="changecolor">
                        <h3>Ingredientes</h3>
                        <p>- 50ml de vodka</p>
                        <p>- 25ml triple sec (ou contreau)</p>
                        <p>- 25ml de suco de limão</p>
                        <p>- 25ml de suco de cranberry (ou de amora ou framboesa)</p>
                        <p>- 1 fatia de casca de limão</p>
                        <p>- gelo triturado</p>
                        <img src="/images/left-arrow.png" />
                    </SwiperSlide>
                    <SwiperSlide id="changecolor">
                        <h3>Preparação</h3>
                        <p>- Numa coqueteleira, coloque gelo, vodca, triple sec, suco de limão e suco de mirtilo.</p>
                        <p>- Agite energeticamente por 10 segundos.</p>
                        <p>- Sirva numa taça de coquetel, decorando a borda com a fatia da casca de limão.</p>
                        <img src="/images/right-arrow.png" />
                    </SwiperSlide>
                </Swiper>
                </>
                **/}
        </Detail>
    )
}

export default Detalhe;

const Detail = styled.div`
    
`

const Alinhar = styled.div`
    display: flex;
    justify-content: space-between;
`

const Subtitle = styled.div`
    margin-bottom: 60px;
    position: relative;
    left: 35%;

    h2 {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 22px;
        letter-spacing: 1px;
    }
`

const Fav = styled.div`
    position: relative;
    right: 12%;

    img {
        width: 30px;
        cursor: pointer;
    }
`

const Information = styled.div`
    position: relative;
    left: 35%;
    display: flex;
    align-items: center;
`

const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 200px;
    }

    p {
        font-family: 'Raleway';
        font-size: 14px;
        text-align: center;
        margin-top: 40px;
        margin-right: 10px;
    }

    #price {
        font-family: 'Oswald';
        font-size: 22px;
        margin-left: 10px;
    }

    #info {
        font-size: 10px;
        letter-spacing: 1px;
    }
`

const Right = styled.div`
    
`

const Text = styled.div`
    background: #283045;
    border-radius: 16px;
    margin-left: 80px;
    width: 440px;
    padding: 30px;
    position: relative;

    h3 {
        color: #69B45B;
        font-family: 'Open Sans';
        letter-spacing: 1px;
        margin-bottom: 28px;
    }

    p {
        font-family: 'Arial';
        font-size: 14px;
        letter-spacing: 1px;
        margin-bottom: 10px;
        margin-left: 10px;
    }
`

const MoreInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 80px;
    margin-top: 20px;

    #group {
        display: flex;
        align-items: center;
    }

    p {
        font-family: 'Raleway';
        font-size: 14px;
        margin-left: 6px;
    }

    img {
        width: 20px;
    }
`

const Button = styled.div`
    position: absolute;
    left: 31%;

    #btn1 {
        background: #49BC74;
        color: #fff;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        margin-top: 40px;
        font-family: 'Arial';
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer; 
    }

    #btn2 {
        background: transparent;
        color: #fff;
        border: none;
        padding: 12px 25px;
        border: 1px solid #fff;
        border-radius: 5px;
        margin-top: 40px;
        margin-right: 20px;
        font-family: 'Arial';
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer; 

        &:hover {
            background: #fff;
            color: #49BC74;
            border: 1px solid #fff;
        }
    }
`
