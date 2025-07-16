import PropTypes from "prop-types";
import { useState } from "react";




function CounterApp({ value }) {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter+1)
    const handleRemove = () => setCounter(counter-1)
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>The Value is:</h1>
            <p> {counter} </p>
            <button onClick={handleAdd} className="matrix-button"> +1 </button>
            <button onClick={handleRemove} className="matrix-button"> -1 </button>
            <button onClick={handleReset} className="matrix-button"> reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}

export { CounterApp }