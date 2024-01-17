import React, { useState } from 'react'
import styles from "./AcercaYo.module.css"
import { Carousel } from 'react-bootstrap'

const AcercaYo = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div name="AcercaDeMi" className={styles.acerca}>
            <div className={styles.acercaContainer}>
                <h2 className={styles.title}>Acerca de nosotros</h2>
                <p className={styles.textoPrincipal}>Somos una empresa dedicada a hacer de tus eventos sociales momentos únicos e inolvidables.
                    Con años de experiencia en la industria, nos enorgullece ofrecer servicios excepcionales para
                    satisfacer las necesidades de nuestros clientes.</p>
                <Carousel activeIndex={index} onSelect={handleSelect} className={styles.sliderBox}>
                    <Carousel.Item>
                        <img src={require("../assets/concierto1.jpg")} alt="Presentadora" className={styles.imgCarrusel} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require("../assets/concierto2.jpg")} alt="Concierto" className={styles.imgCarrusel} />
                        <Carousel.Caption>
                            <h3 className={styles.tituloCarrusel}>Creatividad en Cada Detalle</h3>
                            <p className={styles.textoCarrusel}>Nuestro equipo se esfuerza por añadir toques únicos y creativos a cada celebración.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require("../assets/concierto3.jpg")} alt="Concierto" className={styles.imgCarrusel} />
                        <Carousel.Caption>
                            <h3 className={styles.tituloCarrusel}>Comprometidos con la Excelencial</h3>
                            <p className={styles.textoCarrusel}>Compromiso constante para ofrecer servicios de alta calidad que superen expectativas.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require("../assets/concierto4.jpg")} alt="Concierto" className={styles.imgCarrusel} />
                        <Carousel.Caption>
                            <h3 className={styles.tituloCarrusel}>Experiencias Inolvidables</h3>
                            <p className={styles.textoCarrusel}>Transformamos cada evento en una experiencia que perdura en la memoria.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default AcercaYo
