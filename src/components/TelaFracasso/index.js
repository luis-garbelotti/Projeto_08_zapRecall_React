import "./style.css"
import minilogo from "../../assets/logo-mini.png"
import sad from "../../assets/sad.png"
import next from "../../assets/next.png"

export default function TelaFracasso(props) {

    function resetar() {

        props.setEstadoFracasso("escondido");
        props.setEstadoFlashcard("escondido");
        props.setInicialEscondida("");
        props.setContadorPerguntas(1);
        props.setEstadoFrente("");
        props.setEstadoVerso("escondido");
        props.setTexto(props.deck.perguntas[`${props.numCard}`].titulo);
        props.setResposta(props.deck.perguntas[`${props.numCard}`].resposta);
        props.setAvaliacao("")
        props.setMostraAvaliacao("");
        props.setButtonTurn("escondido");
        console.log(props.contaZap);

    }

    return (
        <div className={`${props.estadoFracasso}`}>

            <img className="mini-logo pointer" src={minilogo} onClick={() => window.location.reload()} />

            <div className="resultado-final">

                <span>Putz.. <img src={sad} /></span>

                <p>Você esqueceu alguns flashcards...<br />Não desanime! Na próxima você consegue!</p>

                <button className="botao pointer" onClick={resetar}>

                    <p>Tentar novamente</p>
                    <img src={next} alt="next" className="next" />

                </button>

            </div>

        </div>
    )
}