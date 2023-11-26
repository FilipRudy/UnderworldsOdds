export const oktaConfig = {
    clientId: "0oadgz025l03ZRQHp5d7",
    issuer: "https://dev-49994608.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsChecks: true,
};