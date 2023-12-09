import React from "react";

const Button = ({ children, style, onClick }) => {
    const css = {
        fontSize: "14px",
        fontWeight: "600",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
    };
    return (
        <button
            style={{
                ...css,
                ...style,
            }}
            onClick={() => {
                onClick();
            }}>
            {children}
        </button>
    );
};

export default Button;
