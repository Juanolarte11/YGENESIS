import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./Navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useScrollPosition } from '../Hooks/scrollPosition';

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const detectDimensions = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', detectDimensions);
        if (windowDimensions.width > 800) {
            setNavBarOpen(false);
        }
        return () => {
            window.removeEventListener('resize', detectDimensions);
        }
    }, [windowDimensions]);

    const Links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "AcercaDeMi"
        },
        {
            id: 3,
            link: "Artistas"
        },
        {
            id: 4,
            link: "Contacto"
        }
    ];

    const scrollPosition = useScrollPosition()

    return (
        <div className={
            navBarOpen 
                ? styles.navOpen
                : scrollPosition > 0 
                ? styles.navOnScroll
                : styles.navBar
            }>
            <p className={styles.logo}>YEGENIS</p>
            {!navBarOpen && windowDimensions.width < 800 ? (
                <IoMdMenu onClick={() => setNavBarOpen(!navBarOpen)} color='aliceblue' size={25} />
            ) : (
                windowDimensions.width < 800 && (
                    <IoClose onClick={() => setNavBarOpen(!navBarOpen)} color='aliceblue' size={25} />
                )
            )}
            {(navBarOpen || windowDimensions.width > 800) && (
                <ul className={styles.linksContainer}>
                    {Links.map(link => (
                        <li key={link.id}>
                            <Link
                                onClick={() => setNavBarOpen(false)}
                                to={link.link}
                                smooth
                                duration={500}
                                className={styles.navLink}
                            >
                                {link.link === "AcercaDeMi" ? "Acerca de mí" : link.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
