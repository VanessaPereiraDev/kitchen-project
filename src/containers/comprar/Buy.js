import react from 'react'
import styled from 'styled-components'
import Form from '../../components/views/comprar/form';

const Buy = () => {
    return (
        <Pagamento>
            <div className='form'>
                <h1>Detalhes de Pagamento</h1>
                <p>As suas informações</p>
                <Form/>
            </div>
        </Pagamento>
    )
}

export default Buy;

const Pagamento = styled.div`
    .form {
        width: 500px;
        margin: 0 auto;
        padding: 3em;

        .form h1 {
            margin-bottom: 0.5em;
        }
    }
`