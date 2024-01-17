import React from "react";
import styles from "./Home.module.css"
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div name='Home' className={styles.home}>
            <div className={styles.titleContainer}>
                <p>Bienvenido a <br />
                    <b>YEGENIS</b>
                </p>
                <p>Transformamos tus eventos en<br />
                    <b>experiencias inolvidables</b>
                </p>
            </div>
            <div className={styles.containerButton}>
                    <Link
                        to={"Contact"}
                        smooth
                        duration={500}
                        className={styles.callToAction}
                    >Contactanos</Link>
            </div>
        </div>
    );
};

export default Home;
