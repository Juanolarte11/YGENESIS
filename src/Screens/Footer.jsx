import React from "react";
import Logo from "../assets/favicon.png";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "./Footer.module.css";  // Asegúrate de importar los estilos del módulo

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerSectionOne}>
                <div className={styles.footerLogoContainer}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.footerIcons}>
                    <BsTwitter />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className={styles.footerSectionTwo}>
                <div className={styles.footerSectionColumns}>
                    <span>Qualtiy</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className={styles.footerSectionColumns}>
                    <span>244-5333-7783</span>
                    <span>hello@food.com</span>
                    <span>press@food.com</span>
                    <span>contact@food.com</span>
                </div>
                <div className={styles.footerSectionColumns}>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
