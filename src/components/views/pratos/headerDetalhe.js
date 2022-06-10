import react from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFireFlameCurved, faPlateWheat } from '@fortawesome/free-solid-svg-icons';

const HeaderDetalhe = () => {
    return (
        <Container>
            <div className='info'>
                <FontAwesomeIcon icon={faClock} id="icon"/>
                <p>30 MIN</p>
            </div>
            <div className='info'>
                <FontAwesomeIcon icon={faFireFlameCurved} id="icon"/>
                <p>354 Kcal</p>
            </div>
            <div className='info'>
                <FontAwesomeIcon icon={faPlateWheat} id="icon"/>
                <p>2</p>
            </div>
        </Container>
    )
}

export default HeaderDetalhe;

const Container = styled.div`
    display: flex;
    position: absolute;
    left: 35%;
    top: 35%;

    .info {
        display: flex;
        align-items: center;
        margin: 15px;

        #icon {
            font-size: 20px;
        }

        p {
            font-family: 'Open Sans';
            margin-left: 10px;
            font-size: 15px; 
            letter-spacing: 1px;
        }
    }
`