import { useEffect, useState } from 'react';

import classes from "./Navbar.module.css";

import logo from "../../images/foto_me_hd.jpg"

const Navbar = () => {
    console.log("navbar");
    const [isHeaderChanged, setIsHeaderChanged] = useState(false);

    const scrollHandler = () => {
        if (window.pageYOffset > 250) {
            setIsHeaderChanged(true);
        } else {
            setIsHeaderChanged(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, { passive: true });
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    const headerClass = `${classes.header} ${isHeaderChanged && classes.header__modified}`;
    const iconClass = `${classes.icon} ${isHeaderChanged && classes.icon__modified}`;

    return (
        <header className={headerClass}>
            <span className={iconClass}>
                <img src={logo} alt="" />
                <p> Marco Dal </p>
            </span>
            <ul className={classes.navigation}>
                <li> Nav 1 </li>
                <li> Nav 2 </li>
                <li> Nav 3 </li>
            </ul>
        </header>
    );
}

export default Navbar;