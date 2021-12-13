import React from "react";
import "./style.css"
import logo from "../../assets/logo.png"
import next from "../../assets/next.png"

export default function TelaInicio(props) {

    function mostrarPerguntas() {

        props.setInicialEscondida("escondido");
        props.setEstadoFlashcard("");

    }

    return (

        <div className={`${props.inicialEscondida}`}>
            <div className={`tela-inicial`}>

                <img src={logo} className="logo-inicio" alt="mini-logo" />

                <button className="praticar pointer" onClick={mostrarPerguntas}>
                    <p>{props.deck.titulo}</p>
                    <img src={next} alt="next" className="next" />
                </button>

            </div>
        </div>

    )
}
