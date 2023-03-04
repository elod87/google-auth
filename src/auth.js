let _token = null;
let _userData = null;

export const appLogin = ({ token, userData }) => {
    _token = token;
    _userData = userData;
};

export const appLogout = () => {
    _token = null;
    _userData = null;
};

export const getAppToken = () => _token;

export const getUserData = () => _userData;
