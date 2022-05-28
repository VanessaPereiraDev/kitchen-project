import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Pagination } from "swiper";

const Detail = () => {

    return (
        <Detalhe>
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
                    <img src="/images/cosmopolitan.png" />
                    <p>Preço <span>9,5 €</span></p>
                </Image>
                <Right>
                    <Text>
                        <h3>Ingredientes</h3>
                        <p>- 50ml de vodka</p>
                        <p>- 25ml triple sec (ou contreau)</p>
                        <p>- 25ml de suco de limão</p>
                        <p>- 25ml de suco de cranberry (ou de amora ou framboesa)</p>
                        <p>- 1 fatia de casca de limão</p>
                        <p>- gelo triturado</p>
                        <img src="/images/right-arrow.png" />
                    </Text>
                    <MoreInfo>
                        <p>58 Kcal</p>
                        <p>5 min</p>
                        <p>Fácil</p>
                    </MoreInfo>
                </Right>
            </Information>
            <Button>
                <button>Pedir agora</button>
            </Button>
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
        </Detalhe>
    )
}

export default Detail;

const Detalhe = styled.div`
    
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
    
    img {
        width: 140px;
    }

    p {
        font-family: 'Raleway';
        font-size: 14px;
        margin-top: 40px;
        margin-left: 5px;
    }

    span {
        font-family: 'Oswald';
        font-size: 22px;
        margin-left: 5px;
    }
`

const Right = styled.div`
    
`

const Text = styled.div`
    background: #283046;
    margin-left: 80px;
    padding: 35px 85px 40px 30px;
    position: relative;

    h3 {
        color: #69B45B;
        font-family: 'Open Sans';
        letter-spacing: 1.8px;
        margin-bottom: 28px;
    }

    p {
        font-size: 13px;
        margin-bottom: 8px;
        margin-left: 10px;
    }

    img {
        width: 23px;
        position: absolute;
        right: 30px;
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

const MoreInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 80px;
    margin-top: 20px;

    p {
        font-family: 'Raleway';
        font-size: 14px;
    }
`

const Button = styled.div`
    button {
        background: #49BC74;
        color: #fff;
        border: none;
        padding: 12px 25px;
        border-radius: 7px;
        position: absolute;
        right: 12%;
        margin-top: 40px;
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.2px;
        cursor: pointer;

        &:hover {
            background: #3a965c;
        } 
    }
`

