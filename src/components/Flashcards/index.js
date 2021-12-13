import { useState } from "react/cjs/react.development";

import "./style.css"
import minilogo from "../../assets/logo-mini.png"
import turn from "../../assets/turn.png"

export default function Flashcards(props) {

    const avaliacoes = ["Aprendi agora", "Não lembrei", "Lembrei com esforço", "Zap!"];

    function mostrarResposta() {

        props.setEstadoFrente("escondido");
        props.setEstadoVerso("");

    }

    function mostrarBotaoProximo() {

        props.setAvaliacao("escondido");
        props.setButtonTurn("");

    }

    function aprendiAgora() {

        if (props.numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("aprendi-agora-card")

        } else {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("aprendi-agora-card")
            props.setNumCard(props.numCard + 1)

        }
    }

    function naoLembrei() {

        if (props.numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("nao-lembrei-card")

        } else {

            mostrarBotaoProximo()
            props.setMostraAvaliacao("nao-lembrei-card")
            props.setNumCard(props.numCard + 1)

        }
    }

    function lembreiEsforco() {

        if (props.numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("lembrei-esforco-card")

        } else {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("lembrei-esforco-card")
            props.setNumCard(props.numCard + 1)

        }
    }

    function zap() {

        props.setContaZap(props.contaZap + 1);

        if (props.numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("zap-card")

        } else {

            mostrarBotaoProximo();
            props.setMostraAvaliacao("zap-card")
            props.setNumCard(props.numCard + 1)
            console.log(props.contaZap);

        }
    }

    function proximo() {

        if (props.contadorPerguntas === props.deck.perguntas.length) {

            props.setEstadoFlashcard("escondido");

            if (props.contaZap === props.deck.perguntas.length) {

                props.setEstadoSucesso("");
                props.setNumCard(0);
                props.setContaZap(0);

            } else {
                props.setEstadoFracasso("");
                props.setNumCard(0);
                props.setContaZap(0);
            }

        } else {

            props.setContadorPerguntas(props.contadorPerguntas + 1);
            props.setEstadoFrente("");
            props.setEstadoVerso("escondido");
            props.setTexto(props.deck.perguntas[`${props.numCard}`].titulo)
            props.setResposta(props.deck.perguntas[`${props.numCard}`].resposta)
            props.setAvaliacao("");
            props.setButtonTurn("escondido");
            props.setMostraAvaliacao("");

        }
    }

    return (

        <div className={`tela-flashcards ${props.estadoFlashcard}`}>

            <img className="mini-logo pointer" src={minilogo} onClick={() => window.location.reload()} />

            <div className={`card ${props.mostraAvaliacao}`} data-identifier="flashcard">

                <div className={`frente ${props.estadoFrente}`}>

                    <p data-identifier="counter">
                        {props.contadorPerguntas}/{props.deck.perguntas.length}
                    </p>

                    <h1>{props.texto}</h1>

                    <img src={turn} className="pointer" onClick={mostrarResposta} data-identifier="arrow" />

                </div>

                <div className={`${props.estadoVerso} `}>

                    <div className="verso">
                        <header >

                            <h6> {props.texto} </h6>

                            <p data-identifier="counter">
                                {props.contadorPerguntas}/{props.deck.perguntas.length}
                            </p>

                        </header >

                        <h1>{props.resposta}</h1>

                        <footer className={`${props.avaliacao} `}>

                            <div className="aprendi-agora pointer" onClick={aprendiAgora}>
                                {avaliacoes[0]}
                            </div>
                            <div className="nao-lembrei pointer" onClick={naoLembrei}>
                                {avaliacoes[1]}
                            </div>
                            <div className="lembrei-esforco pointer" onClick={lembreiEsforco}>
                                {avaliacoes[2]}
                            </div>
                            <div className="zap pointer" onClick={zap}>
                                {avaliacoes[3]}
                            </div>

                        </footer>

                        <img src={turn} className={`${props.buttonTurn} pointer`} onClick={proximo} data-identifier="arrow" />

                    </div>
                </div>

            </div>
        </div>
    )
}







