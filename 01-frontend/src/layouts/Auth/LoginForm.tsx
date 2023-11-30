import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginFormProps {
    onLogin: (e: React.FormEvent, login: string, password: string) => void;
    onRegister: (
        e: React.FormEvent,
        firstName: string,
        lastName: string,
        login: string,
        password: string,
    ) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const [state, setState] = useState({
        active: "login",
        firstName: "",
        lastName: "",
        login: "",
        password: "",
    });

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmitLogin = (e: FormEvent) => {
        e.preventDefault();
        props.onLogin(e, state.login, state.password);
    };

    const onSubmitRegister = (e: FormEvent) => {
        e.preventDefault();
        props.onRegister(
            e,
            state.firstName,
            state.lastName,
            state.login,
            state.password,
        );
    };

    return (
        <div className="row justify-content-center">
            <div className="col-4">
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
                                    type="login"
                                    id="loginName"
                                    name="login"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="loginName">
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
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="firstName">
                                    First name
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="lastName">
                                    Last name
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="login"
                                    name="login"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="login">
                                    Username
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="registerPassword"
                                    name="password"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="registerPassword">
                                    Password
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
