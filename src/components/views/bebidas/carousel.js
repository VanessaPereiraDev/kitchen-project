import react, {useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleRight, FaAngleLeft} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

const Test = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NextArrow = ({onClick}) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaAngleRight size="2em"/>
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaAngleLeft size="2em"/>
            </div>
        );
    };

    const images = [
      {
        title: 'Long Island',
        image: 'long1',
      },
      {
        title: 'Blue Lagoon',
        image: 'long1',
      },
      {
        title: 'Tequila',
        image: 'long1',
      },
      {
        title: 'Pina Colada',
        image: 'long1',
      },
      {
        title: 'Mojito',
        image: 'long1',
      },
      {
        title: 'Cosmopolitan',
        image: 'long1',
      },
      {
        title: 'Cocktail',
        image: 'long1',
      },
      {
        title: 'Pink Cocktail',
        image: 'long1',
      },
    ];

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className='test'>
            <Slider {...settings}>
                {images.map((item, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"} onClick={handleShow}>
                        <img src={require('../../../assets/' + item.image + '.png')} alt={item.title} />
                        <p style={{fontFamily:'Montserrat', fontSize:'19px', letterSpacing:'1.2px', marginTop: '15px'}}>
                          {item.title}
                        </p>
                    </div>
                ))}
            </Slider>
            <Cursor>
                <img class="blink" src="/images/click.png" />
            </Cursor>
            {show && 
                  <div id="card">
                    <img id="close" src="/images/cancel.png" onClick={handleClose} />
                    <h3>Cosmopolitan</h3>
                    <p>58 Kcal</p>
                    <img id="drink" src="/images/tequila-sunrise.png" />
                    <Link to="/detail" style={{ textDecoration: 'none' }}>
                        <button>Ver detalhes</button>
                    </Link>
                  </div>
                }
        </div>
    )
}

export default Test;

const Cursor = styled.div`
    z-index: 1;
    position: absolute;
    left: 68%;
    margin-top: 60px;    

    img {
      width: 30px;
      animation: blink 2.5s, a9 1.1s infinite linear alternate;      
      animation-iteration-count: infinite;

      @keyframes blink {
        0% {
          opacity: 1;
        }
  
        50% {
          opacity: 0;
        }
  
        100% {
          opacity: 1;
        }
      } 

      @keyframes a9 {
        0%   {transform: translate(-10px)}
        100% {transform: translate( 10px)}
      }      
    }
`


