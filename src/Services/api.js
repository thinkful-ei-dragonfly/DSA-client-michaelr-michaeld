const BASE_URL = 'http://localhost:8080';

const API = {
  getCats: () => {
    return fetch(`${BASE_URL}/api/cat`, {
    })
      .then(res => res.json());
  }
}

module.exports = API;