import react from 'react';
import styled from 'styled-components';

const HorizBar = () => {
    return (
        <Barras>
            <div class="box">
                <div>
                    <div class="skills prot"></div>
                </div>
                <p>22g Proteínas</p>
                <div>
                    <div class="skills hidr"></div>
                </div>
                <p>12,5g Hidratos</p>
                <div>
                    <div class="skills lip"></div>
                </div>
                <p>10g Lípidos</p>
                <div>
                    <div class="skills sal"></div>
                </div>
                <p>5,2g Sal</p>
            </div>
        </Barras>
    )
}

export default HorizBar;

const Barras = styled.div`
    box-sizing: border-box;
    position: absolute;
    left: 6%;

    .box {
        width: 230px;
    }

    .box p {
        margin-bottom: 20px;
        margin-top: 3px;
        font-family: 'Open Sans';
        font-size: 13px;
        letter-spacing: 1px;
        color: #DCDCD7;
    }

    .skills { 
        height: 10px;
        border-radius: 2px;
    }

    .prot {width: 90%; background-color: #81CE6A; animation: protBar 2.5s 1;}
    .hidr {width: 70%; background-color: #E7F337; animation: hidrBar 2.5s 1;} 
    .lip {width: 45%; background-color: #F33A3A; animation: lipBar 2.5s 1;} 
    .sal {width: 20%; background-color: #B932FB; animation: salBar 2.5s 1;} 
 
    @keyframes protBar {
        from {
            width: 0;
        }
        to {
            width: 90%;
        }
    }

    @keyframes hidrBar {
        from {
            width: 0;
        }
        to {
            width: 70%;
        }
    }

    @keyframes lipBar {
        from {
            width: 0;
        }
        to {
            width: 45%;
        }
    }

    @keyframes salBar {
        from {
            width: 0;
        }
        to {
            width: 20%;
        }
    }
`