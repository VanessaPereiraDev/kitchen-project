import react, { useState } from 'react';
import styled from 'styled-components';
import HeaderFood from '../../components/views/pratos/header';
import Instrucoes from '../../components/views/pratos/receita';
import Video from '../../components/views/pratos/video';
import Receita from '../../components/views/section/receita';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Preparacao = () => {

    const [show, setShow] = useState(false);
    const [tag, setTag] = useState(true);

    return (
        <Group>
            <HeaderFood/>
            <Subtitle>
              <h2>Preparação</h2>
              <img src="/images/heart.png" id="heart" />
            </Subtitle>
            {tag &&
                <Fade top duration={3000}>
                    <Instrucoes/>
                </Fade>
            }
            <Cursor>
                <img class="blink" src="/images/click1.png" />
            </Cursor>
            {show &&
                <Zoom>
                    <Video/>
                </Zoom>
            }
            <div id="suggestion" onClick={() => {setShow(!show); setTag(!tag)}}>
                <p>Ver vídeo</p>
                <img src="/images/next.png" />
            </div>
            <Receita/>
        </Group>
    )
}

export default Preparacao;

const Group = styled.div`
    position: relative;

    #suggestion {
        position: absolute;
        margin-left: 55%;
        display: flex;

        p {
            color: #fff;
            font-family: 'Montserrat';
            letter-spacing: 1px;
            cursor: pointer;
        }

        img {
            width: 17px;
            margin-left: 10px;
            animation: slide1 1s ease-in-out infinite;
        }

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

const Subtitle = styled.div`
    margin-bottom: 60px;
    display: flex;
    align-items: center;

    h2 {
        position: relative;
        left: 34%;
        font-family: 'Oswald';
        font-weight: 200;
        font-size: 28px;
        letter-spacing: 1px;
    }

    #heart {
        width: 30px;  
        position: absolute;
        right: 12%; 
        margin-top: 20px;
        cursor: pointer;
    }
`

const Cursor = styled.div`
    z-index: 1;
    position: absolute;
    left: 70%; 
    top: 90%;   

    img {
      width: 22px;
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
        0%   {transform: translate(-20px)}
        100% {transform: translate( 20px)}
      }      
    }
`