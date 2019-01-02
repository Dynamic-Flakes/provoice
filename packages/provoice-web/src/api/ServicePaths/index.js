export default {
  path: 'https://localhost:4000/',
  children: {
    signup: {
      path: 'signup'
    },
    login: {
      path: 'signin'
    },
    logout: {
      path: 'logout'
    },
    resetpassword: {
      path: 'resetpassword'
    },
    forgotpassword: {
      path: 'forgotpassword'
    },
    sendemail: {
      path: 'sendEmailActivation'
    },
    confirmregistration: {
      path: 'registrationCOnfirmation'
    },
    user: {
      path: 'userProfile'
    },
    userinfo: {
      path: 'userInfo'
    },
  }
};
