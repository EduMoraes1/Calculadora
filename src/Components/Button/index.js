import React from 'react';
import './style.css';

const Button = ({valor, atualizaPapai}) => {
    const clicaBotao = () => {

        atualizaPapai(valor);
    }
    return (<button 
        className = "button" 
        onClick={clicaBotao}>
        {valor}
    </button>   
    )
}

export default Button;