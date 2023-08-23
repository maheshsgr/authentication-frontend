export const storeToken = (token) => {
  window.localStorage.setItem('access_token', JSON.stringify(token));
};
