// 1. Build functions to fetch our data and test our backend in the process.
// 2. Allow CORS (Cross Origin Resource Sharing) on our backend server. We setup
//    the `rack-cors` on Awesome Answers to accomplish this.

const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'Apikey 97e126ea44f00609c54c379e390798be27688e03c02c4ee66103054413c714bf';

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
