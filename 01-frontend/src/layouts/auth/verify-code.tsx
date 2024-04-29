import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { request } from "../../axios_helper";
import useOnce from "../util/helpers/hooks/use-once";
import "../../css/auth/verify-code.css";


const VerifyCode = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const [verificationResult, setVerificationResult] = useState("");

    useOnce(() => {
        const verifyUser = async () => {
            try {
                const response = await request("GET", `/verify?code=${code}`, {});
                if (response.data === "verify_success") {
                    setVerificationResult("Email verified successfully, you can now login safely!");
                } else {
                    setVerificationResult("Email has already been verified");
                }
            } catch (error) {
                console.error("Error verifying email:", error);
                setVerificationResult("An error occurred while verifying email.");
            }
        };

        verifyUser();
    });

    return (
        <div>
            <div className={"divider"}></div>
            <div className="container result">
                <h1> Email Verification</h1>
                <p>{verificationResult}</p>
            </div>
            <div className={"divider"}></div>
            <div className={"divider"}></div>
            <div className={"divider"}></div>
        </div>

    );
};

export default VerifyCode;
