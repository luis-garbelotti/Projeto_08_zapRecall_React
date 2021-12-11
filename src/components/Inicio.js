import React from "react";

export default function TelaInicio() {

    return (
        <>
            <div class="tela-inicial">
                <img src="./assets/logo.png" className="logo-inicio" />
                <button className="praticar">
                    <p>Praticar React</p>
                    <img src="./assets/next.png" className="next" />
                </button>
            </div>
        </>
    );

}