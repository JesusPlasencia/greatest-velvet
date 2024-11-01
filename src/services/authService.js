import axios from 'axios';

const API_BASE_URL = 'https://your-oauth2-server.com';
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const TOKEN_ENDPOINT = `${API_BASE_URL}/oauth/token`;

export const isAuthenticated = () => {
  return !!localStorage.getItem("access_token");
}

export const login = async (username, password) => {
  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  const refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQsswac';
  saveTokens(access_token, refresh_token);
  return access_token;
}

// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(TOKEN_ENDPOINT, {
//       grant_type: 'password',
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       username,
//       password,
//     });

//     const { access_token, refresh_token } = response.data;
//     saveTokens(access_token, refresh_token);
//     return access_token;
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');

export const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await axios.post(TOKEN_ENDPOINT, {
      grant_type: 'refresh_token',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
    });

    const { access_token } = response.data;
    saveTokens(access_token, refreshToken); // Reuse the same refresh token
    return access_token;
  } catch (error) {
    logout();
    throw new Error('Session expired. Please log in again.');
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};