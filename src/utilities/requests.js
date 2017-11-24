// 1. Build functions to fetch our data and test our backend in the process.
// 2. Allow CORS (Cross Origin Resource Sharing) on our backend server. We setup
//    the `rack-cors` on Awesome Answers to accomplish this.

const DOMAIN = 'http://arj-project.herokuapp.com';
const API_PATH = '/api/v1';
const API_KEY = 'Apikey 84a3cabac41f4e46469f6584773f4e4cf5aa5e85f4199e53733a4eba79406e28';

export const Organization = {

  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/organizations`,
      {
        method: 'GET',
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/organizations/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/organizations/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}

export const User = {

  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/users`,
      {
        method: 'GET',
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/users/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}
