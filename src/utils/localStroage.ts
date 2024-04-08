const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);
export const addAccessToken = (token: string) => window.localStorage.setItem(ACCESS_TOKEN, token);
export const removeAccessToken = () => window.localStorage.removeItem(ACCESS_TOKEN);
