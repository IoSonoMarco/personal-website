import classes from "./NavigationBox.module.css";

import NavigationCard from "./NavigationCard";

import scienceLogo from "../../images/science.png";
import cvLogo from "../../images/online-resume.png";
import devLogo from "../../images/coding.png";
import lectureLogo from "../../images/presentation.png";

const NavigationBox = () => {
    return (
        <div className={classes.container} >
            <NavigationCard 
                logo={scienceLogo}
                title="Scientific Output" 
                description="List of representative publications on peer-reviewed scientific journals." 
            />
            <NavigationCard 
                logo={cvLogo}
                title="Curriculum Vitae" 
                description="My personal resume describing who I am, my expertise and job experiences." 
            />
            <NavigationCard 
                logo={devLogo}
                title="Software Dev" 
                description="List of representative publications on peer-reviewed scientific journals." 
            />
            <NavigationCard 
                logo={lectureLogo}
                title="Lectures" 
                description="List of representative publications on peer-reviewed scientific journals." 
            />
        </div>
    );
}

export default NavigationBox;