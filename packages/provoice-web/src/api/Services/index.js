import axios from 'axios';
import apiPathsRoot from '../ServicePaths';

const apiPaths = apiPathsRoot.children;

// ============= Auth ====================
const loginRequest = data =>
  axios.post(`${apiPaths.login.path}`, { data: JSON.stringify(data) });

const doRegister = (data) =>
  axios.post(`${apiPaths.signup.path}`, { data: JSON.stringify(data) });

const loginCompletionRequest = role =>
  axios.post(`${apiPaths}`, { role: JSON.stringify(role) });

const logoutRequest = () =>
  axios.get(`${apiPaths.logout.path}`);

const resetPasswordRequest = data =>
  axios.post(`${apiPaths.sendPasswordReset.path}`, { ...data });

const resendActionationEmail = email =>
  axios.post(`${apiPaths}`, { email: JSON.stringify(email) });

const recoverPassword = identifier =>
  axios.post(`${apiPaths}`, { identifier });

const changePassword = (oldPassword, newPassword) =>
  axios.patch(`${apiPaths}`, { oldPassword, newPassword });

const deleteAccount = () =>
  axios.delete(`${apiPaths}`);

// ============================ Language ==================
const getUserLang = () =>
  axios.get(`${apiPaths.availableLang.path}`);

const setUserLang = payload => 
  axios.put(`${apiPaths.userLang.path}`, {payload});

const getAvailableLang = () => 
  axios.get(`${apiPaths.availableLang.path}`);

const getAvatar = id => 
  axios.get(`${apiPaths}/image/${id}?maxWidth=200&maxHeight=200`);

const getUserSession = () => 
  axios.get(`${apiPaths.userSession.path}`);

//======= News letter suscription ====== 
const getSubscriptions = () => 
  axios.get(`${apiPaths}`);

const subscribe = (id) => 
  axios.post(`${apiPaths}`, {id});

const unsubscribe = id =>
  axios.delete(`${apiPaths}`, {id});

  export {
    loginRequest,
    doRegister,
    loginCompletionRequest,
    logoutRequest,
    resetPasswordRequest,
    resendActionationEmail,
    recoverPassword,
    changePassword,
    deleteAccount,
    getUserLang,
    setUserLang,
    getAvailableLang,
    getAvatar,
    getUserSession,
    getSubscriptions,
    subscribe,
    unsubscribe
    };
  
