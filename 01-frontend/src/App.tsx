import * as React from "react";
import { request, setAuthHeader } from "../src/axios_helper";
import {Buttons} from "./layouts/Auth/Buttons";
import LoginForm from "./layouts/Auth/LoginForm";
import AuthContent from "./layouts/Auth/AuthContent";
import {Footer} from "./layouts/FooterAndHeader/Footer";
import {Navbar} from "./layouts/FooterAndHeader/Header";


interface AppState {
    componentToShow: "welcome" | "login" | "messages";
}

export default class App extends React.Component< any, AppState> {

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
                <Navbar/>
                <Buttons
                    login={this.login}
                    logout={this.logout}
                />

                {this.state.componentToShow === "welcome" && <div>h-hej </div>}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
                {this.state.componentToShow === "messages" && <AuthContent />}
                <Footer/>
            </>
        );
    }
}
