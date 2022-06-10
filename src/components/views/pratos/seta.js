import react from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom";

const Back = () => {
    return(
        <Link to="/home">
            <Arrow src="/images/curve-down-arrow.png" />
        </Link>
    )
}

export default Back;

const Arrow = styled.img`
    width: 28px;
    position: absolute;
    left: 67%;
    top: 22%;
    cursor: pointer;
`