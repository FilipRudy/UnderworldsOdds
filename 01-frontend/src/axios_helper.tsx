import axios from "axios";


export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token");
};
export const isAuthTokenValid = async () => {

    const token = localStorage.getItem("auth_token");
    if (token) {
        try {
            const response = await fetch("http://localhost:8080/validate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": token // Send the token in the request header
                }
            });

            if (response.ok) {
                const isValid = await response.json();
                return isValid;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error validating token:", error);
            return false;
        }
    } else {
        return false;
    }
};

export const setAuthHeader = (token: string | null) => {
    if (typeof token === "string") {
        window.localStorage.setItem("auth_token", token);
    }
};

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method: string, url: string, data: object) => {

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {"Authorization": `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};