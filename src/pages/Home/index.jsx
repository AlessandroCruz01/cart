import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {filtroAcima} from "../../utils/filtroRequest";

import Card from "../../components/Card";
import styles from "./Home.module.scss";
import { useCount } from "../../context/Count";




const Home = () => {

    const { count, setCount } = useCount([]);
    console.log(count);

    function submit(element){
        setCount([...count , element]);
    }

    return (
        <div>
            <header className={styles.cabecalho}>
                <Link to="/carrinho" className={styles.link}>
                    <BsFillCartFill width={50} height={50} style={{ marginRight: "0.5rem" }} />
                    <span>
						PRODUTOS NO CARRINHO {count.length}
                    </span>
                </Link>
            </header>

            <div className={styles.content}>
                {filtroAcima.map((element, index) => (
                    <Card
                        key={index}
                        titulo={element.name}
                        preco={element.price}
                        imagem={element.img}
                        onClick={() => setCount(() => submit(element))}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;