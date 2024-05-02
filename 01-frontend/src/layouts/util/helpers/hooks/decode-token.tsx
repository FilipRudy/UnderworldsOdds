export const decodeToken = (token: string) => {
    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("Invalid token");
    }
    const payload = atob(parts[1]);
    if (!payload) {
        throw new Error("Invalid token");
    }
    return JSON.parse(payload);
};
