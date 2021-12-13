import { useState } from "react"
import TelaInicio from "../TelaInicio"
import Flashcards from "../Flashcards"
import TelaSucesso from "../TelaSucesso";
import TelaFracasso from "../TelaFracasso";

export default function App() {

    const deck = {
        titulo: "Praticar React",
        perguntas: [
            {
                titulo: "O que é JSX?",
                resposta: "Uma extensão de linguagem do JavaScript"
            },
            {
                titulo: "O React é __ ",
                resposta: "É uma biblioteca JavaScript para construção de interfaces"
            },
            {
                titulo: "Componentes devem iniciar com __ ",
                resposta: "Letra maiúscula"
            },
            {
                titulo: "Podemos colocar __ dentro do JSX",
                resposta: "Expressões"
            },
            {
                titulo: "O ReactDOM nos ajuda __ ",
                resposta: "Interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                titulo: "Usamos o npm para __",
                resposta: "gerenciar os pacotes necessários e suas dependências"
            },
            {
                titulo: "Usamos props para __ ",
                resposta: "passar diferentes informações para componentes "
            },
            {
                titulo: "Usamos estado (state) para __ ",
                resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            },
            {
                titulo: "Como fazemos o 'onclick' no React?",
                resposta: "Com a sintaxe 'onClick={ }', passando o nome da função dentro das { }, sem que a função receba um parâmetro."
            },
            {
                titulo: "Podemos utilizar spreads ( ... ) para __ ",
                resposta: "Criar uma nova array/objeto com os mesmos dados da array/objeto anterior."
            }
        ]
    }

    const [numCard, setNumCard] = useState(0);
    const [texto, setTexto] = useState(deck.perguntas[`${numCard}`].titulo);
    const [resposta, setResposta] = useState(deck.perguntas[`${numCard}`].resposta);
    const [inicialEscondida, setInicialEscondida] = useState("");
    const [estadoFlashcard, setEstadoFlashcard] = useState("escondido")
    const [contadorPerguntas, setContadorPerguntas] = useState(1);
    const [estadoSucesso, setEstadoSucesso] = useState("escondido");
    const [estadoFracasso, setEstadoFracasso] = useState("escondido");
    const [contaZap, setContaZap] = useState(0);
    const [estadoFrente, setEstadoFrente] = useState("");
    const [estadoVerso, setEstadoVerso] = useState("escondido");
    const [mostraAvaliacao, setMostraAvaliacao] = useState("");
    const [avaliacao, setAvaliacao] = useState("");
    const [buttonTurn, setButtonTurn] = useState("escondido")

    return (
        <>

            <TelaInicio inicialEscondida={inicialEscondida} setInicialEscondida={setInicialEscondida}
                setEstadoFlashcard={setEstadoFlashcard} deck={deck} />

            <Flashcards estadoFlashcard={estadoFlashcard} setEstadoFlashcard={setEstadoFlashcard}
                deck={deck} inicialEscondida={inicialEscondida} setInicialEscondida={setInicialEscondida}
                contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas}
                estadoSucesso={estadoSucesso} setEstadoSucesso={setEstadoSucesso} contaZap={contaZap} setContaZap={setContaZap}
                estadoFracasso={estadoFracasso} setEstadoFracasso={setEstadoFracasso}
                numCard={numCard} setNumCard={setNumCard}
                estadoFrente={estadoFrente} setEstadoFrente={setEstadoFrente}
                estadoVerso={estadoVerso} setEstadoVerso={setEstadoVerso}
                texto={texto} setTexto={setTexto}
                resposta={resposta} setResposta={setResposta}
                mostraAvaliacao={mostraAvaliacao} setMostraAvaliacao={setMostraAvaliacao}
                avaliacao={avaliacao} setAvaliacao={setAvaliacao}
                buttonTurn={buttonTurn} setButtonTurn={setButtonTurn}
            />

            <TelaSucesso estadoSucesso={estadoSucesso} setEstadoSucesso={setEstadoSucesso}
                contaZap={contaZap} setContaZap={setContaZap}
                inicialEscondida={inicialEscondida} setInicialEscondida={setInicialEscondida}
                estadoFlashcard={estadoFlashcard} setEstadoFlashcard={setEstadoFlashcard}
                contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas}
                texto={texto} setTexto={setTexto}
                resposta={resposta} setResposta={setResposta}
                estadoFrente={estadoFrente} setEstadoFrente={setEstadoFrente}
                estadoVerso={estadoVerso} setEstadoVerso={setEstadoVerso}
                numCard={numCard} setNumCard={setNumCard}
                texto={texto} setTexto={setTexto}
                resposta={resposta} setResposta={setResposta}
                deck={deck}
                mostraAvaliacao={mostraAvaliacao} setMostraAvaliacao={setMostraAvaliacao}
                avaliacao={avaliacao} setAvaliacao={setAvaliacao}
                buttonTurn={buttonTurn} setButtonTurn={setButtonTurn}
            />

            <TelaFracasso contaZap={contaZap} setContaZap={setContaZap}
                estadoFracasso={estadoFracasso} setEstadoFracasso={setEstadoFracasso}
                inicialEscondida={inicialEscondida} setInicialEscondida={setInicialEscondida}
                estadoFlashcard={estadoFlashcard} setEstadoFlashcard={setEstadoFlashcard}
                contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas}
                texto={texto} setTexto={setTexto}
                resposta={resposta} setResposta={setResposta}
                estadoFrente={estadoFrente} setEstadoFrente={setEstadoFrente}
                estadoVerso={estadoVerso} setEstadoVerso={setEstadoVerso}
                numCard={numCard} setNumCard={setNumCard}
                texto={texto} setTexto={setTexto}
                resposta={resposta} setResposta={setResposta}
                deck={deck}
                mostraAvaliacao={mostraAvaliacao} setMostraAvaliacao={setMostraAvaliacao}
                avaliacao={avaliacao} setAvaliacao={setAvaliacao}
                buttonTurn={buttonTurn} setButtonTurn={setButtonTurn}
            />

        </>
    )
}