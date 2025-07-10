import PropTypes from "prop-types";



function CounterApp({value}){
    return(
        <>
        <h1>The Value is:</h1>
        <p>{value}</p>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value : 0,
}

export { CounterApp }