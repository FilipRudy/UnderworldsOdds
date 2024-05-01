import * as React from "react";
import { request } from "../../axios_helper";
import "../../css/auth/recover-page.css";
import { useState } from "react";
import RecoverForm from "./recover-form";

export const RecoverPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateUserInput = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (/\s/.test(email)) {
            return "Email field cannot contain spaces or any other whitespace characters.";
        }
        if (!emailRegex.test(email)) {
            return "Invalid email format";
        }
        if (email.trim().length <= 0) {
            return "Email cannot be empty";
        }
        return "Correct";
    };

    const onRecoverPassword = (email: string) => {
        localStorage.removeItem("auth_token");
        setErrorMessage("");
        setSuccessMessage("");
        setLoading(true);

        const validationMessage = validateUserInput(email);
        if (validationMessage !== "Correct") {
            setErrorMessage(validationMessage);
            setLoading(false);
        } else {
            request("POST", "http://localhost:8080/recover/password?email=".concat(email), {
                email: email
            })
                .then(() => {
                    setSuccessMessage("Password recovery email sent successfully!");
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const onResendActivation = (email: string) => {
        localStorage.removeItem("auth_token");
        setErrorMessage("");
        setSuccessMessage("");
        setLoading(true);

        const validationMessage = validateUserInput(email);
        if (validationMessage !== "Correct") {
            setErrorMessage(validationMessage);
            setLoading(false);
        } else {
            request("POST", "http://localhost:8080/recover/activation?email=".concat(email), {
                email: email
            })
                .then(() => {
                    setSuccessMessage("Activation email sent successfully!");
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <div className="container-md recover-page">
            <RecoverForm onRecoverPassword={onRecoverPassword} onResendActivation={onResendActivation} />
            {errorMessage && errorMessage.trim().length > 0 ? (
                <div className="alert alert-danger" role="alert">
                    <a>{errorMessage}</a>
                </div>
            ) : null}
            {successMessage && successMessage.trim().length > 0 ? (
                <div className="alert alert-success" role="alert">
                    <a>{successMessage}</a>
                </div>
            ) : null}
            {loading && (
                <div className="spinner-overlay">
                    <div className="spinner"></div>
                </div>
            )}
        </div>
    );
};
