import React from 'react';

import styles from './List.module.scss'

function List(props) {
  return(
      <div className={styles.lista}>

            <div className={styles.lista__imagem}>
                <img src={props.img} alt="Foto de uma trufa" className={styles.lista__imagem___foto} />
            </div>

            <div className={styles.descs}>
                <span className={styles.descs__titulo}> 
                    {props.name}
                </span>

                <span>
                    {props.price}
                </span>

            </div>


      </div>
  );
}

export default List;