export const setAuthToken = token => {
  localStorage.setItem('token', token);
};

export const checkToken = () => {
  return !!localStorage.getItem('token');
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const removeAuthToken = () => {
  return localStorage.removeItem('token');
};
