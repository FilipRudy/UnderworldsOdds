import React, { useState, ChangeEvent, FormEvent } from "react";

interface RecoverFormProps {
    onRecoverPassword: (email: string) => void;
    onResendActivation: (email: string) => void;
}

const RecoverForm: React.FC<RecoverFormProps> = (props) => {
    const [state, setState] = useState({
        active: "recoverPassword",
        email: "",
    });

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmitRecoverPassword = (e: FormEvent) => {
        e.preventDefault();
        props.onRecoverPassword(state.email);
    };

    const onSubmitResendActivation = (e: FormEvent) => {
        e.preventDefault();
        props.onResendActivation(state.email);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <ul className={"nav nav-pills nav-justified mb-3"} id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${state.active === "recoverPassword" ? "active" : ""}`}
                            onClick={() => setState({ ...state, active: "recoverPassword" })}
                        >
                            Recover Password
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${state.active === "resendActivation" ? "active" : ""}`}
                            onClick={() => setState({ ...state, active: "resendActivation" })}
                        >
                            Resend Activation Email
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className={`tab-pane fade ${state.active === "recoverPassword" ? "show active" : ""}`}>
                        <form onSubmit={onSubmitRecoverPassword}>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="recoverEmail"
                                    name="email"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="recoverEmail">
                                    Email
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-3">
                                Recover Password
                            </button>
                        </form>
                    </div>

                    <div className={`tab-pane fade ${state.active === "resendActivation" ? "show active" : ""}`}>
                        <form onSubmit={onSubmitResendActivation}>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="resendEmail"
                                    name="email"
                                    className="form-control"
                                    onChange={onChangeHandler}
                                />
                                <label className="form-label" htmlFor="resendEmail">
                                    Email
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-3">
                                Resend Activation Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverForm;
