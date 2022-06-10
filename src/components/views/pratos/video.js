import react from 'react';
import styled from 'styled-components';

const Video = () => {

    return (
        <Section>
            <p>Vídeo de sugestão</p>
            <img src="/images/video.png" />
        </Section>
    )
}

export default Video;

const Section = styled.div`
    position: absolute;
    left: 35%;
    margin-top: 5%;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        margin-bottom: 20px;
    }

    img {
        width: 70%;
        cursor: pointer;
        margin-bottom: 50px;
    }
`