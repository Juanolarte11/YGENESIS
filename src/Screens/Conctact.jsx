// import React, { useState } from 'react'
// import styles from './Contact.module.css'
// import { Link } from 'react-scroll';

// const Conctact = () => {

//     const [email, setEmail] = useState('');

//     const handleSubscribe = () => {
//         // Aquí puedes utilizar la información del formulario, como el correo electrónico
//         // para enviar un mensaje al destinatario deseado.

//         // En este ejemplo, se abrirá el cliente de correo del usuario con un destinatario predefinido.
//         const subject = 'Suscripción al boletín GSAP';
//         const mailtoLink = `mailto:destinatario@gmail.com?subject=${encodeURIComponent(subject)}`;

//         window.location.href = mailtoLink;
//     };

//     return (
//         <footer>
//             <div className={styles.footerWrapper}>
//                 <div className={styles.footerSection}>
//                     <div className={styles.footerSubcribe}>
//                         <h2>Contact us for event inquiries and stay informed about our upcoming projects.</h2>
//                         <div className={styles.inputBox}>
//                             <input type="email" placeholder='Your Email Address' />
//                             <button onClick={handleSubscribe}>Send</button>
//                         </div>
//                     </div>
//                     <nav className={styles.footerNav}>
//                         <div>
//                             <h3>Company</h3>
//                             <ul>
//                                 <li><Link to='Home' className={styles.A}>Home</Link></li>
//                                 <li><Link to='AcercaDeMi' className={styles.A}>About</Link></li>
//                                 <li><Link to='Artistas' className={styles.A}>Artistas</Link></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3>Redes Sociales</h3>
//                             <ul>
//                                 <li><a href='https://www.instagram.com/'><img className={styles.imagenSimbolo} src={require("../assets/instagram.png")} alt="Simbolo Instagram" /></a></li>
//                                 <li><a href='https://www.facebook.com/?locale=es_LA'><img className={styles.imagenSimbolo} src={require("../assets/facebook.png")} alt="Simbolo Facebook" /></a></li>
//                                 <li><a href='https://www.youtube.com/'><img className={styles.imagenSimbolo} src={require("../assets/whatsapp.png")} alt="Simbolo Whatsapp" /></a></li>
//                             </ul>
//                         </div>

//                     </nav>
//                 </div>
//                 <div className={styles.footerCopyright}>
//                     <p>°2023 GreenSock, Inc. All rights reserved.</p>
//                     <p>Privacy Policy.</p>
//                     <p>Terms of Use</p>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Conctact


import React from "react";
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.contactPageWrapper}>
            <h1 className={styles.primaryHeading}>Have Question In Mind?</h1>
            <h1 className={styles.primaryHeading}>Let Us Help You</h1>
            <div className={styles.contactFormContainer}>
                <input type="text" placeholder="yourmail@gmail.com" />
                <button className={styles.secondaryButton}>Submit</button>
            </div>
        </div>
    );
};

export default Contact;



