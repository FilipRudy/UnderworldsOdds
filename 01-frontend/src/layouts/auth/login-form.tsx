import React, { useState, ChangeEvent, FormEvent } from "react";
import {doc} from "prettier";

interface LoginFormProps {
    onLogin: (e: React.FormEvent, email: string, password: string) => void;
    onRegister: (
        e: React.FormEvent,
        username: string,
        email: string,
        password: string,
        repeatPassword: string,
    ) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const [state, setState] = useState({
        active: "login",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmitLogin = (e: FormEvent) => {
        e.preventDefault();
        props.onLogin(e, state.username, state.password);
    };

    const onSubmitRegister = (e: FormEvent) => {
        e.preventDefault();
        props.onRegister(
            e,
            state.username,
            state.email,
            state.password,
            state.repeatPassword,
        );
    };

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <ul className={"nav nav-pills nav-justified mb-3"} id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${state.active === "login" ? "active" : ""}`}
                            id="tab-login"
                            onClick={() => setState({ ...state, active: "login" })}
                        >
                            Login
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${state.active === "register" ? "active" : ""}`}
                            id="tab-register"
                            onClick={() => setState({ ...state, active: "register" })}
                        >
                            Register
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className={`tab-pane fade ${state.active === "login" ? "show active" : ""}`} id="pills-login">
                        <form onSubmit={onSubmitLogin}>
                            <div className="form-outline mb-4">
                                <input
                                    type="username"
                                    id="usernameName"
                                    name="username"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="usernameName">
                                    Username
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="loginPassword"
                                    name="password"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="loginPassword">
                                    Password
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign in
                            </button>
                        </form>
                    </div>
                    <div className={`tab-pane fade ${state.active === "register" ? "show active" : ""}`} id="pills-register">
                        <form onSubmit={onSubmitRegister}>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="username">
                                    Username
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="repeatPassword">
                                    Repeat Password
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-3">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
