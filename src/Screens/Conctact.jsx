import React from 'react'
import styles from './Contact.module.css'

const Conctact = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <div className={styles.footerSection}>
                    <div className={styles.footerSubcribe}>
                        <h2>  Subcribe to the GSAP newsletter to stay up-to-date with the latest releases. </h2>
                        <div className={styles.inputBox}>
                            <input type="email" placeholder='Email Address' />
                            <button>

                            </button>
                        </div>
                    </div>
                    <nav className={styles.footerNav}>
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Redes Sociales</h3>
                            <ul>
                                <li><a href="#"><img className={styles.imagenSimbolo} src={require("../assets/instagram.png")} alt="Simbolo Instagram" /></a></li>
                                <li><a href="#"><img className={styles.imagenSimbolo} src={require("../assets/facebook.png")} alt="Simbolo Facebook" /></a></li>
                                <li><a href="#"><img className={styles.imagenSimbolo} src={require("../assets/whatsapp.png")} alt="Simbolo Whatsapp" /></a></li>
                            </ul>
                        </div>

                    </nav>
                </div>
                <div className={styles.footerCopyright}>
                    <p>°2023 GreenSock, Inc. All rights reserved.</p>
                    <p>Privacy Policy.</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}

export default Conctact




// <div name='Contacto'className={styles.contactContainer}>
//     <img className={styles.imagenSimbolo} src={require("../assets/instagram.png")} alt="Simbolo Instagram" />
//     <img className={styles.imagenSimbolo} src={require("../assets/facebook.png")} alt="Simbolo Facebook" />
//     <img className={styles.imagenSimbolo} src={require("../assets/whatsapp.png")} alt="Simbolo Whatsapp" />
// </div>

