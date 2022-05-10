import React from "react";

import styles from "./Card.module.scss";

function Card(props) {
    return(

        <div className={styles.container}>
            <h1 className={styles.titulo}>
                {props.titulo}
            </h1>

            <div className={styles.imagem}>
                <img src={props.imagem} alt="" />
            </div>

            <div className={styles.preco}>
                <span>

                </span>
                <span>
                    {props.preco}
                </span>
            </div>    

            <button type="button" onClick={props.onClick} className={styles.button}>Adicionar ao carrinho</button>

        </div>

    );
}

export default Card;