import * as React from "react";
import { request, setAuthHeader } from "../../axios_helper";
import "../../css/auth/login-page.css";
import { useState } from "react";
import LoginForm from "./login-form";

export const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateUserInput = (password: string, email: string, repeatPassword?: string, username?: string,) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (/\s/.test(email)) {
            return "Email field cannot contain spaces or any other whitespace characters.";
        }
        if (!emailRegex.test(email)) {
            return "Invalid email format";
        }
        if (username && /\s/.test(username)) {
            return "Username field cannot contain spaces or any other whitespace characters.";
        }
        if (/\s/.test(password)) {
            return "Password field cannot contain spaces or any other whitespace characters.";
        }
        if (email.trim().length <= 0) {
            return "Email cannot be empty";
        }
        if (username && username.trim().length < 5) {
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

    const onLogin = (e: React.FormEvent, email: string, password: string) => {
        e.preventDefault();
        localStorage.removeItem("auth_token");
        setErrorMessage("");
        setLoading(true);

        if (validateUserInput(password, email) !== "Correct") {
            setErrorMessage(validateUserInput(password, email));
            setLoading(false);
        } else {
            request("POST", "/login", {
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

        if (validateUserInput(password, email, repeatPassword, username) !== "Correct") {
            setErrorMessage(validateUserInput(password, email, repeatPassword, username));
            setLoading(false);
        } else {
            request("POST", "/register", {
                login: username,
                email: email,
                password: password
            })
                .then(() => {
                    window.location.href = "/register/success";
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
            {errorMessage && errorMessage.trim().length > 0 && errorMessage !== "Correct" ? (
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
