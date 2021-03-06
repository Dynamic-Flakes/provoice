export default {
  path: 'https://localhost:4000/',
  children: {
    signup: {
      path: 'users/signup'
    },
    login: {
      path: 'users/login'
    },
    logout: {
      path: 'users/logout'
    },
    resetpassword: {
      path: 'users/resetpassword'
    },
    forgotpassword: {
      path: 'users/forgotpassword'
    },
    sendemail: {
      path: 'users/sendEmailActivation'
    },
    confirmregistration: {
      path: 'users/registrationcOnfirmation'
    },
    userprofile_user: {
      path: '/users/getuserprofile_user'
    },
    addprofilepicture: {
      path: '/users/addprofilepicture'
    },
    userDetails: {
      path: '/users/getUserDetails'
    },
    createProfile: {
      path: '/user/createProfile'
    },
    editProfile: {
      path: '/users/editprofileofuser'
    },
    addUserCard: {
      path: '/users/addusercard'
    },
    carDetails: {
      path: '/users/getcardetails'
    },
    creditCarddetails: {
      path: '/users/getcreditcarddetails'
    },
    userSession: {
      path: 'usersession'
    },
    userLang: {
      path: 'usersession/language'
    },
    availableLang: {
      path: 'login/availableLanguages'
    },
    filterCards: {
      path: '/listings/filterCards'
    },
  }
};
