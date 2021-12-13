import "./style.css"

import minilogo from "../../assets/logo-mini.png"
import party from "../../assets/party.png"


export default function TelaSucesso(props) {

    return (
        <div className={`tela-flashcards ${props.estadoSucesso}`}>

            <img className="mini-logo" src={minilogo} />

            <div className="resultado-final">
                <span>PARABÉNS ! <img src={party} /></span>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>

        </div>
    )
}