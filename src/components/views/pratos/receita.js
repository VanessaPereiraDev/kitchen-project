import react from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Intrucoes = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <Slider {...settings}>
            <div>
            <div id="passo">
                <h3 id="numero">1.</h3>
                <img id="images" src="/images/passo1.png" />
                <div id="txt">
                    <p>Corte a parte de baixo dos espargos (só vai utilizar as pontas).</p>
                </div>
                <div id="line"></div>
            </div>
            </div>
            <div id="passo">
                <h3 id="numero">2.</h3>
                <img id="images" src="/images/passo2.png" />
                <div id="txt">
                    <p>Cubra a panela com água, tempere com um pouco de sal e azeite e leve ao micro-ondas.</p>
                </div>
            </div>
            <div id="passo">
                <h3 id="numero">3.</h3>
                <img id="images" src="/images/passo3.png" />
                <div id="txt">
                    <p>Escorra. Coloque um montinho de 6 espargos em cada prato.</p>
                </div>
            </div>
            <div id="passo">
                <h3 id="numero">4.</h3>
                <img id="images" src="/images/prato-final1.jpg" />
                <div id="txt">
                    <p>Finalize colocando uma folha de salsa em cima da massa.</p>
                </div>
            </div>
        </Slider>
    )
}

export default Intrucoes;

