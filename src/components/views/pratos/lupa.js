import react from 'react'
import styled from 'styled-components'

const Lupa = () => {
    return(
        <Img>
            <img src="/images/lupa.png" />
        </Img>
    )
}

export default Lupa;

const Img = styled.div`
    width: 30px;
    position: absolute;
    left: 70%;
    top: 22%;
    cursor: pointer;
`
