import react from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const InfoDetalhe = () => {

    const detalhe = {
        display:'flex',
        flexDirection:'column'
    };

    return (
            <Content>
                <Info>
                    <Image>
                        <img src="/images/carbonara1.png" />
                    </Image>
                </Info>
                <div id="group">
                    <h3>Kcal</h3>
                    <h1>124</h1>
                    <Fade bottom delay={500}>
                        <div id="line">
                            <div id="bar1"></div>
                            <div style={detalhe}>
                                <p>Proteínas</p>
                                <p id="gr">25.2g</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={1000}>
                        <div id="line">
                            <div id="bar2"></div>
                            <div style={detalhe}>
                                <p>Carbohidratos</p>
                                <p id="gr">18.4g</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={1500}>
                        <div id="line">
                            <div id="bar3"></div>
                            <div style={detalhe}>
                                <p>Lípidos</p>
                                <p id="gr">6.9g</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={2000}>
                        <div id="line">
                            <div id="bar4"></div>
                            <div style={detalhe}>
                                <p>Sal</p>
                                <p id="gr">4g</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Content>
        )
}

export default InfoDetalhe;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 60px;
    margin-right: 80px;

    #group {
        position: absolute;
        left: 59%;
    }

    #line {
        display: flex;
        margin-bottom: 15px;
    }

    #bar1 {
        width: 30px;
        height: 10px;
        border-radius: 10px;
        background: #81CE6A;
        margin-top: 3px;
    }

    #bar2 {
        width: 33px;
        height: 10px;
        border-radius: 10px;
        background: #E7F337;
        margin-top: 3px;
    }

    #bar3 {
        width: 33px;
        height: 10px;
        border-radius: 10px;
        background: #F33A3A;
        margin-top: 3px;
    }

    #bar4 {
        width: 33px;
        height: 10px;
        border-radius: 10px;
        background: #B932FB;
        margin-top: 3px;
    }

    h3 {
        font-family: 'Open Sans';
        color: #D4CFCF;
        margin-top: 20px;
    }

    h1 {
        font-family: 'Open Sans';
        margin-bottom: 35px;
    }

    p {
        font-family: 'Arial';
        font-size: 14px;
        color: #CFCFCF;
        letter-spacing: 1px;
        margin-left: 10px;
    }

    #gr {
        color: #fff;
        font-weight: 700;
        margin-top: 3px;
        margin-left: 16px;
    }
`

const Info = styled.div` 
    transform: rotate(90deg);
`

const Image = styled.div`
    img {
        margin-top: 15px;
        width: 340px;
    }
`