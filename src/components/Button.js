import React from 'react'

const Button = ({ text, onHome, onReset }) => {

    if (text === "Home") {
        return (
            <button onClick={onHome}>
                {text}
            </button>
        );
    } else if (text === "Reset") {
        return (
            <button onClick={onReset}>
                {text}
            </button>
        );
    } else {
        return (
            <button >
                {text}
            </button>
        );
    }
}

export default Button
