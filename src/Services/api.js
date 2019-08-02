const BASE_URL = 'http://localhost:8080';

const API = {
  getDog: () => {
    return fetch(`${BASE_URL}/api/dog`).then(res => res.json());
  },



  getCat: () => {
    return fetch(`${BASE_URL}/api/cat`).then(res => res.json());
  }
};

module.exports = API;
