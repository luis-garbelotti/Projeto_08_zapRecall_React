import { useState } from "react/cjs/react.development";

import "./style.css"
import minilogo from "../../assets/logo-mini.png"
import turn from "../../assets/turn.png"

export default function Flashcards(props) {

    const avaliacoes = ["Aprendi agora", "Não lembrei", "Lembrei com esforço", "Zap!"];

    const [numCard, setNumCard] = useState(0);
    const [texto, setTexto] = useState(props.deck.perguntas[`${numCard}`].titulo);
    const [resposta, setResposta] = useState(props.deck.perguntas[`${numCard}`].resposta);
    const [estadoFrente, setEstadoFrente] = useState("");
    const [estadoVerso, setEstadoVerso] = useState("escondido");
    const [buttonTurn, setButtonTurn] = useState("escondido")
    const [avaliacao, setAvaliacao] = useState("")
    const [mostraAvaliacao, setMostraAvaliacao] = useState("");

    function mostrarResposta() {

        setEstadoFrente("escondido");
        setEstadoVerso("");

    }

    function mostrarBotaoProximo() {

        setAvaliacao("escondido");
        setButtonTurn("");

    }

    function aprendiAgora() {

        if (numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            setMostraAvaliacao("aprendi-agora-card")

        } else {

            mostrarBotaoProximo();
            setMostraAvaliacao("aprendi-agora-card")
            setNumCard(numCard + 1)

        }
    }

    function naoLembrei() {

        if (numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            setMostraAvaliacao("nao-lembrei-card")

        } else {

            mostrarBotaoProximo()
            setMostraAvaliacao("nao-lembrei-card")
            setNumCard(numCard + 1)

        }
    }

    function lembreiEsforco() {

        if (numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            setMostraAvaliacao("lembrei-esforco-card")

        } else {

            mostrarBotaoProximo();
            setMostraAvaliacao("lembrei-esforco-card")
            setNumCard(numCard + 1)

        }
    }

    function zap() {

        props.setContaZap(props.contaZap + 1);

        if (numCard === props.deck.perguntas.length - 1) {

            mostrarBotaoProximo();
            setMostraAvaliacao("zap-card")

        } else {

            mostrarBotaoProximo();
            setMostraAvaliacao("zap-card")
            setNumCard(numCard + 1)

        }
    }

    function proximo() {

        if (props.contadorPerguntas === props.deck.perguntas.length) {

            props.setEstadoFlashcard("escondido");

            if (props.contaZap === props.deck.perguntas.length) {

                props.setEstadoSucesso("");

            } else {
                props.setEstadoFracasso("");
            }

        } else {

            props.setContadorPerguntas(props.contadorPerguntas + 1);
            setEstadoFrente("");
            setEstadoVerso("escondido");
            setTexto(props.deck.perguntas[`${numCard}`].titulo)
            setResposta(props.deck.perguntas[`${numCard}`].resposta)
            setAvaliacao("");
            setButtonTurn("escondido");
            setMostraAvaliacao("");

        }
    }

    return (

        <div className={`tela-flashcards ${props.estadoFlashcard}`}>

            <img className="mini-logo" src={minilogo} />
            <div className={`card ${mostraAvaliacao}`}>

                <div className={`frente ${estadoFrente}`}>
                    <p>
                        {props.contadorPerguntas}/{props.deck.perguntas.length}
                    </p>
                    <h1>{texto}</h1>

                    <img src={turn} className="pointer" onClick={mostrarResposta} />
                </div>

                <div className={`${estadoVerso} `}>
                    <div className="verso">
                        <header >
                            <h6>
                                {texto}
                            </h6>
                            <p>
                                {props.contadorPerguntas}/{props.deck.perguntas.length}
                            </p>
                        </header >

                        <h1>{resposta}</h1>

                        <footer className={`${avaliacao} `}>
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
                        <img src={turn} className={`${buttonTurn} pointer`} onClick={proximo} />
                    </div>
                </div>

            </div>
        </div >
    )
}







