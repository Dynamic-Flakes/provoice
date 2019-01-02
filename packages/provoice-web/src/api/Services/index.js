import axios from 'axios';
import apiPathsRoot from '../ServicePaths';

const apiPaths = apiPathsRoot.children;

// ============= Auth ====================
export const loginRequest = data =>
  axios.post(`${apiPaths.login.path}`, { data: JSON.stringify(data) });

export const registerRequest = (data) =>
  axios.post(`${apiPaths.signup.path}`, { data: JSON.stringify(data) });

export const loginCompletionRequest = role =>
  axios.post(`${apiPaths}`, { role: JSON.stringify(role) });

export const logoutRequest = () =>
  axios.get(`${apiPaths.logout.path}`);

export const resetPasswordRequest = data =>
  axios.post(`${apiPaths.sendPasswordReset.path}`, { ...data });

export const resendActionationEmail = email =>
  axios.post(`${apiPaths}`, { email: JSON.stringify(email) });

export const recoverPassword = identifier =>
  axios.post(`${apiPaths}`, { identifier });

export const changePassword = (oldPassword, newPassword) =>
  axios.patch(`${apiPaths}`, { oldPassword, newPassword });

export const deleteAccount = () =>
  axios.delete(`${apiPaths}`);

// ============================ Language ==================
export const getUserLang = () =>
  axios.get(`${apiPaths.availableLang.path}`);

export const setUserLang = payload => 
  axios.put(`${apiPaths.userLang.path}`, {payload});

export const getAvailableLang = () => 
  axios.get(`${apiPaths.availableLang.path}`);

export const getAvatar = id => 
  axios.get(`${apiPaths}/image/${id}?maxWidth=200&maxHeight=200`);

export const getUserSession = () => 
  axios.get(`${apiPaths.userSession.path}`);

//======= News letter suscription ====== 
export const getSubscriptions = () => 
  axios.get(`${apiPaths}`);

export const subscribe = (id) => {
  axios.post(`${apiPaths}`, {id});

export const unsubscribe = (id) =>
  axios.delete(`${apiPaths}`, {id});