import axios from 'axios';
import apiPathsRoot from '../ServicePaths';

const apiPaths = apiPathsRoot.children;

// ============= Auth ====================
export function loginRequest(username, password) {
  return axios.post(`${apiPaths.login.path}`, {
    username,
    password,
  });
}

export function registerRequest(username, password) {
    return axios.post(`${apiPaths.signup.path}`, {
      username,
      password,
    });
  }

export function loginCompletionRequest(role) {
  return axios.post(`${apiPaths}`, role);
}

export function logoutRequest() {
  return axios.get(`${apiPaths.logout.path}`);
}

export function resetPasswordRequest(form) {
    return axios.post(`${apiPaths.sendPasswordReset.path}`, {
      ...form,
    });
  }

  export function resendActionationEmail(email) {
    return axios.post(`${apiPaths}, ${email}`);
  }

  export function recoverPassword(identifier) {
    return axios.post(`${apiPaths}`, { identifier });
  }

  export function changePassword(oldPassword, newPassword) {
    return axios.patch(`${apiPaths}`, { oldPassword, newPassword });
  }
  
  export function deleteAccount() {
    return axios.delete(`${apiPaths}`);
  }

  // ============================ Language ==================
export function getUserLang() {
  return axios.get(`${apiPaths}/userSession/language`);
}

// TODO: Looks like this is not being used
export function setUserLang(payload) {
  return axios.put(`${apiPaths}/userSession/language`, payload);
}

export function getAvailableLang() {
  return axios.get(`${apiPaths}/login/availableLanguages`);
}

export function getAvatar(id) {
  return `${apiPaths}/image/${id}?maxWidth=200&maxHeight=200`;
}

export function getUserSession() {
  return axios.get(`${apiPaths}/userSession`);
}


export function getNotifications() {
    return axios.get(`${apiPaths}/notifications/all?limit=20`);
  }
  
  export function getNotificationsEndpoint() {
    return axios.get(`${apiPaths}/notifications/websocketEndpoint`);
  }
  export function getImageAction(id) {
    return axios({
      url: `${apiPaths}/image/${id}?maxWidth=200&maxHeight=200`,
      responseType: 'blob',
    }).then(response => response.data);
  }
  
  export function postImageAction(data) {
    return axios
      .post(`${apiPaths}/image`, data)
      .then(response => response.data);
  }

  export function getMessages(lang) {
    return axios.get(`${apiPaths}/i18n/messages${lang ? '?=' + lang : ''}`);
  }

  export function getLayout(boardId) {
    return axios.get(
      apiPaths + '/board/' + boardId + '/newCardsView/layout'
    );
  }
  
  export function createView(boardId) {
    return axios.post(apiPaths + '/board/' + boardId + '/newCardsView');
  }
  
  export function getView(boardId, viewId, firstRow) {
    return axios.get(
      apiPaths +
        '/board/' +
        boardId +
        '/newCardsView' +
        (viewId ? '/' + viewId : '') +
        (viewId ? '?firstRow=' + firstRow + '&pageLength=50' : '')
    );
  }
  
  export function addCard(boardId, laneId, cardId, index) {
    return axios.post(apiPaths + '/board/' + boardId + '/card', {
      laneId: laneId,
      position: index,
      documentId: cardId,
    });
  }
  
  export function filterCards(boardId, viewId) {
    return axios.post(
      apiPaths + '/board/' + boardId + '/newVardsView/' + viewId + '/filter'
    );
  }
  
  export function addDashboardWidget(entity, id, pos) {
    return axios.post(apiPaths + '/dashboard/' + entity + '/new', {
      kpiId: id,
      position: pos,
    });
  }
  
  export function removeDashboardWidget(entity, id) {
    return axios.delete(apiPaths + '/dashboard/' + entity + '/' + id);
  }

  export function createEmail(windowId, documentId) {
    return axios.post(apiPaths + '/mail', {
      documentPath: {
        documentId: documentId,
        windowId: windowId,
      },
    });
  }
  
  export function sendEmail(emailId) {
    return axios.post(apiPaths + '/mail/' + emailId + '/send');
  }
  
  export function addAttachment(emailId, file) {
    let data = new FormData();
  
    data.append('file', file);
  
    return axios.post(
      apiPaths + '/mail/' + emailId + '/field/attachments',
      data
    );
  }
  
  export function getEmail(emailId) {
    return axios.get(apiPaths + '/mail/' + emailId);
  }
  
  export function getTemplates() {
    return axios.get(apiPaths + '/mail/templates');
  }
  
  //======= News letter suscription ====== 
  export function getSubscriptions() {
    return axios.get('/api/member/subscriptions/');
  }
  
  export function subscribe(id) {
    return axios.post(`/api/member/subscriptions/${id}/`);
  }
  
  export function unsubscribe(id) {
    return axios.delete(`/api/member/subscriptions/${id}/`);
  }
  