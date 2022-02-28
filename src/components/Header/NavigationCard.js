import classes from "./NavigationCard.module.css";

const NavigationCard = props => {
    return (
        <div className={classes.card}>
            <h2> {props.title ? props.title : "Title"} </h2>
            <p> {props.description ? props.description : "Descripion"} </p>
            <img src={props.logo} alt="logo" />
        </div>
    );
}

export default NavigationCard;