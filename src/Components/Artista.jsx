import React from 'react';
import styles from './Artista.module.css';

const Artista = ({ artista }) => {
  return (
    <div className={styles.artista}>
      <h3>{artista.nombre}</h3>
      <p>{artista.descripcion}</p>
      <p>{artista.descripcion2}</p>
      <img className={styles.imagenArtista} src={artista.foto} alt={artista.nombre} />
    </div>
  );
};

export default Artista;