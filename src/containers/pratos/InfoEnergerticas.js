import react from 'react';
import Infoenerg from '../../components/views/pratos/infoenerg';
import styled from 'styled-components';

const InfoEnergeticas = () => {
    return (
        <Container>
            <Infoenerg/>
            <Image>
                <img src="/images/carbonara1.png" />
            </Image>
        </Container>
    )
}

export default InfoEnergeticas;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(90deg);
`

const Image = styled.div`
    img {
        margin-top: 15px;
        width: 340px;
    }
`