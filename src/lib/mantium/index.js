const axios = require("axios");

class mantium {
  constructor(username, password) {
    this.username = username,
    this.password = password
  }

  static token = undefined;

  async getToken() {
    try {

      const client = axios.create({
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const data = {
        'username': this.username,
        'password': this.password
      }

      const result = await client.post('https://api.mantiumai.com/auth/login/access/token', data);

      return result.data.data.attributes.bearer_id;
    } catch (err) {
      throw err;
    }
  }

  async revokeToken(token) {
    try {

      const client = axios.create({
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      const result = await client.post('https://api.mantiumai.com/auth/user/revoke/token');

      return result.data;
    } catch (err) {
      throw err;
    }
  }

  async listPrompts(page = 1, size = 20) {
    try {

      const client = axios.create({
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      });

      const result = await client.get(`https://api.mantiumai.com/v1/prompt?page=${page}&size=${size}`);

      return result.data;
    } catch (err) {
      throw err;
    }
  }

  async tryPrompt(id, text) {
    try {

      const client = axios.create({
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      });

      const result = await client.post(`https://api.mantiumai.com/v1/prompt/${id}/try?sync=true&input=${encodeURI(text)}`);

      return result.data;
    } catch (err) {
      throw err;
    }
  }

  async addPrompt(prompt) {
    try {

      const client = axios.create({
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      });

      const result = await client.post('https://api.mantiumai.com/v1/prompt/?sync=true', JSON.stringify(prompt));

      return result.data;
    } catch (err) {
      throw err;
    }
  }

};

module.exports = mantium;