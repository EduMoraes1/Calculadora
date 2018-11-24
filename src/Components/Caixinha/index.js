import React from 'react';
import './style.css';
import Display from '../Display/index'
import Button from '../Button/index'
import calculaExpressao from './utils';

class Caixinha extends React.Component {
    state ={valorDoDisplay:''};
    atualizaODisplay = (valorDoBotao) => {
        if (valorDoBotao === "=") {
            const exp = calculaExpressao(this.state.valorDoDisplay);
            this.setState ({
                valorDoDisplay: exp,
        })
        }
        else if (valorDoBotao === "Clear"){
            this.setState({
            valorDoDisplay:"",
        })
        } 
        else {
            this.setState({
            valorDoDisplay: this.state.valorDoDisplay + valorDoBotao,
        })
    }
  
}
         
    render (){
    const mybuttons = ["0", "1", "2","3","4","5","6","7","8","9","+","-", "*","/","=","Clear"];
    return (
    <div className = "caixinha">
    <Display valor={this.state.valorDoDisplay} />
    {
        mybuttons.map(botao => <Button valor={botao} atualizaPapai={this.atualizaODisplay}/>)
    }
    </div>)
    }
}

export default Caixinha;