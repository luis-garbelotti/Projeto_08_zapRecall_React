import "./style.css"
import minilogo from "../../assets/logo-mini.png"
import party from "../../assets/party.png"
import next from "../../assets/next.png"

export default function TelaSucesso(props) {

    function resetar() {

        props.setEstadoSucesso("escondido");
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
        <div className={`${props.estadoSucesso}`}>

            <img className="mini-logo pointer" src={minilogo} onClick={() => window.location.reload()} />

            <div className="resultado-final">

                <span>PARABÉNS ! <img src={party} /></span>

                <p>Você não esqueceu de nenhum flashcard!</p>

                <button className="botao pointer" onClick={resetar}>

                    <p>Tentar novamente</p>
                    <img src={next} alt="next" className="next" />

                </button>

            </div>

        </div>
    )
}