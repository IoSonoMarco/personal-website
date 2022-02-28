import { Fragment } from 'react';

import Navbar from "./Navbar";
import Banner from "./Banner";
import NavigationBox from './NavigationBox';

const Header = () => {
    return (
        <Fragment>
            <Navbar />
            <Banner />
            <NavigationBox />
        </Fragment>
    );
}

export default Header;