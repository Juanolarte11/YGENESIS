import React, { useState } from 'react'
import styles from './Artistas.module.css'
import Artista from '../Components/Artista'
import { artistas } from '../assets/artistas'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Artistas = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artistas.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? artistas.length - 1 : prevIndex - 1
        );
    };

    return (
        <div name="Artistas" className={styles.carousel}>
            <h2 className={styles.title}>Artistas que manejo</h2>
            <div className={styles.carouselContainer}>
                {/* <button onClick={handlePrev}>Anterior</button> */}
                <FaArrowCircleLeft onClick={handlePrev} size={100}className={styles.flechaLogo}/>
                <Artista artista={artistas[currentIndex]} />
                <FaArrowCircleRight onClick={handleNext} size={100}className={styles.flechaLogo}/>
                {/* <button onClick={handleNext}>Siguiente</button> */}
            </div>
        </div>
    );
}

export default Artistas