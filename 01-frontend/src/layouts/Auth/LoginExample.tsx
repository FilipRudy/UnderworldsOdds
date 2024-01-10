import * as React from "react";
import {request, setAuthHeader} from "../../axios_helper";
import {Navbar} from "../FooterAndHeader/Header";
import {Buttons} from "./Buttons";
import LoginForm from "./LoginForm";
import AuthContent from "./AuthContent";
import {Footer} from "../FooterAndHeader/Footer";


interface AppState {
    componentToShow: "welcome" | "login" | "messages";
}

export default class LoginExample extends React.Component< any, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        };
    }

    login = () => {
        this.setState({ componentToShow: "login" });
    };

    logout = () => {
        this.setState({ componentToShow: "welcome" });
        setAuthHeader(null);
    };

    onLogin = (e: React.FormEvent, username: string, password: string) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "messages" });
            }).catch(
            (error) => {

                setAuthHeader(null);
                this.setState({ componentToShow: "welcome" });
            }
        );
    };

    onRegister = (event: React.FormEvent, firstName: string, lastName: string, username: string, password: string) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "messages" });
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({ componentToShow: "welcome" });
            }
        );
    };

    render() {
        return (

            <>
                <Buttons
                    login={this.login}
                    logout={this.logout}
                />

                {this.state.componentToShow === "welcome" && <div>h-hej </div>}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
                {this.state.componentToShow === "messages" && <AuthContent />}
            </>
        );
    }
}