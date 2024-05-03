import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/auth/user-profile.css";
import { isAuthTokenValid, request } from "../../axios_helper";

const UserProfile = () => {
    const { username } = useParams();
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [passwordChangeError, setPasswordChangeError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [warbandReviews, setWarbandReviews] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4); 

    useEffect(() => {
        const isUserValid = isAuthTokenValid();
        isUserValid.then(val => {
            setIsValidToken(val);
        });

        loadWarbandReviews();
    }, []);

    const loadWarbandReviews = () => {
        setLoading(true);
        request("GET", `/review/all/${username}`, {})
            .then((response) => {
                setWarbandReviews(response.data);
            })
            .catch((error) => {
                console.error("Error loading warband reviews:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setPasswordChangeError("New passwords do not match.");
            return;
        }

        setLoading(true);

        request("POST", "/change/password", {
            currentPassword: currentPassword,
            newPassword: newPassword,
            newPasswordConfirmation: confirmNewPassword,
            username: username
        })
            .then(() => {
                setCurrentPassword("");
                setNewPassword("");
                setConfirmNewPassword("");
                setPasswordChangeError("");
                setSuccessMessage("Password changed successfully!");
            })
            .catch((error) => {
                setPasswordChangeError(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = warbandReviews.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="user-profile-container">
            <div className="user-greeting">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>{username}'s profile</h2>
            </div>

            <div className="user-card-container">
                {isValidToken ? (
                    <div className="user-card">
                        <h3>Change Password</h3>
                        <form onSubmit={handlePasswordChange}>
                            <div className="form-group">
                                <label htmlFor="currentPassword">Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    className="form-control"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="form-control"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirmNewPassword"
                                    className="form-control"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary profile-button">
                                {loading ? "Changing Password..." : "Change Password"}
                            </button>
                        </form>
                        {passwordChangeError && (
                            <div className="alert alert-danger mt-3">{passwordChangeError}</div>
                        )}
                        {successMessage && (
                            <div className="alert alert-success mt-3">{successMessage}</div>
                        )}
                    </div>
                ) : (
                    ""
                )}

                <div className="user-card">
                    <h3>Warband Reviews</h3>
                    {warbandReviews.length === 0 ? (
                        <p>No reviews yet</p>
                    ) : (
                        <>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Stars amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {currentItems.map((review, index) => (
                                    <tr key={index}>
                                        <td>{review.warband.name}</td>
                                        <td>{review.starsAmount}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <ul className="pagination">
                                {Array.from({ length: Math.ceil(warbandReviews.length / itemsPerPage) }, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                        <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {loading && <p>Loading warband reviews...</p>}
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
