import react, {useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleRight, FaAngleLeft} from "react-icons/fa";

const TodosPratos = () => {

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
        title: 'Carbonara',
        image: 'carbonara',
      },
      {
        title: 'Salmão Fumado',
        image: 'salmaofumado',
      },
      {
        title: 'Salmão Grelhado',
        image: 'grelhado',
      },
      {
        title: 'Massa Vitela',
        image: 'vitela',
      },
      {
        title: 'Arrow Frango',
        image: 'arroz',
      },
      {
        title: 'Vegetariano',
        image: 'vegetariano',
      },
      {
        title: 'Salada Cesar',
        image: 'salada-cesar',
      },
      {
        title: 'Arroz Frango',
        image: 'arroz',
      },
    ];

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className='inicio'>
            <Slider {...settings}>
                {images.map((item, idx) => (
                    <div className={idx === imageIndex ? "slide" : "slide"}>
                        <img src={require('../../../assets/' + item.image + '.png')} alt={item.title} />
                        <p style={{fontSize:'18px', letterSpacing:'1.2px', marginTop: '15px'}}>
                          {item.title}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default TodosPratos;
