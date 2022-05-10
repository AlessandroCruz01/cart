import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCount } from "../../context/Count";

import List from "../../components/List";
import styles from "./Carrinho.module.scss";

const Carrinho = () => {

    const { count, setCount } = useCount([]);
    const [total, setTotal] = useState(Number);

    useEffect(() => {
        count.map((item => (
            setTotal((total + parseFloat(item.price)))
        )));
    }, [count]);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link to="/" className={styles.header__link}>
                    <h1>Meu carrinho</h1>
                </Link>
            </header>

            <section className={styles.section}>

                {count.map((item, index) => (
                    <List 
                        key={index}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                    />
                ))}

            </section>

            <div className={styles.prices}>
                <div className={styles.prices___values}>
                    <h2>Total</h2>
        
                    <h2>{`R$ ${total}`}</h2>

                </div>

                <div className={styles.prices___promotion}>
                    <span>Parabéns, sua compra tem frete grátis !</span>
                </div>
            </div>

            <footer className={styles.footer}>
                <button className={styles.footer__button}>
        Finalizar compra
                </button>
            </footer>
        </main>
    );
};

export default Carrinho;