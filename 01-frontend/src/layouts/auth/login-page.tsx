import * as React from "react";
import { request, setAuthHeader } from "../../axios_helper";
import "../../css/auth/login-page.css";
import { useState } from "react";
import LoginForm from "./login-form";

export const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateUserInput = (username: string, password: string, repeatPassword?: string, email?: string) => {
        if (email && /\s/.test(email)) {
            return "Last name field cannot contain spaces or any other whitespace characters.";
        }
        if (/\s/.test(username)) {
            return "Username field cannot contain spaces or any other whitespace characters.";
        }
        if (/\s/.test(password)) {
            return "Password field cannot contain spaces or any other whitespace characters.";
        }
        if (email && email.trim().length <= 0) {
            return "Email cannot be empty";
        }
        if (username.trim().length < 5) {
            return "Username must be at least 5 characters long";
        }
        if (password.trim().length < 6) {
            return "Password must be at least 6 characters long";
        }
        if (repeatPassword && password !== repeatPassword) {
            return "Passwords are different";
        }
        return "Correct";
    };

    const onLogin = (e: React.FormEvent, username: string, password: string) => {
        e.preventDefault();
        localStorage.removeItem("auth_token");
        setErrorMessage("");
        setLoading(true);

        if (validateUserInput(username, password) !== "Correct") {
            setErrorMessage(validateUserInput(username, password));
            setLoading(false);
        } else {
            request("POST", "/login", {
                login: username,
                password: password
            })
                .then((response) => {
                    setAuthHeader(response.data.token);
                    window.location.href = "/";
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                    setAuthHeader(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const onRegister = (
        event: React.FormEvent,
        username: string,
        email: string,
        password: string,
        repeatPassword: string
    ) => {
        event.preventDefault();
        localStorage.removeItem("auth_token");
        setErrorMessage("");
        setLoading(true);

        if (validateUserInput(username, password, repeatPassword, email) !== "Correct") {
            setErrorMessage(validateUserInput(username, password, repeatPassword, email));
            setLoading(false);
        } else {
            request("POST", "/register", {
                login: username,
                email: email,
                password: password
            })
                .then((response) => {
                    setAuthHeader(response.data.token);
                    window.location.href = "/";
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                    setAuthHeader(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <div className="container-md login-page">
            <LoginForm onLogin={onLogin} onRegister={onRegister} />
            {errorMessage.trim().length > 0 && errorMessage !== "Correct" ? (
                <div className="alert alert-danger" role="alert">
                    <a>{errorMessage}</a>
                </div>
            ) : (
                <a></a>
            )}
            {loading && (
                <div className="spinner-overlay">
                    <div className="spinner"></div>
                </div>
            )}
        </div>
    );
};
