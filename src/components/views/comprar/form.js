import react from 'react'
import styled from 'styled-components'

const Form = () => {
    return (
        <form className='form'>
            <div>
                <input type="text" placeholder="Insira o seu nome"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o produto"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Pagar"/>
            </div>
        </form>
    )
}

export default Form;

