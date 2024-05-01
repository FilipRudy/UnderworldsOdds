import React from "react";
import "../../css/auth/verify-code.css";


const SuccessfulRegister = () => {
    return (
        <div>
            <div className={"divider"}></div>
            <div className="container result">
                <h1> You were registered successfuly</h1>
                <p> Now please confirm your email by clicking the link that we sent you</p>
                <a href="/src/layouts/auth/recover-form">Need to resend email? Click here</a>
            </div>
            <div className={"divider"}></div>
            <div className={"divider"}></div>
            <div className={"divider"}></div>
        </div>

    );
};

export default SuccessfulRegister;
