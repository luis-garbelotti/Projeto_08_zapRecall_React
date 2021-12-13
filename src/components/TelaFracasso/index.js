import "./style.css"

import minilogo from "../../assets/logo-mini.png"
import sad from "../../assets/sad.png"

export default function TelaFracasso(props) {

    return (
        <div className={`tela-flashcards ${props.estadoFracasso}`}>

            <img className="mini-logo" src={minilogo} />

            <div className="resultado-final">
                <span>Putz... <img src={sad} /></span>
                <p>Você esqueceu alguns flashcards...<br />Não desanime! Na próxima você consegue!</p>
            </div>

        </div>
    )
}