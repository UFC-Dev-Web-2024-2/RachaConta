const API_URL = 'http://localhost:3002';

export const api = {
  async get(resource, query = '') {
    const response = await fetch(`${API_URL}/${resource}${query}`);
    return response.json();
  },

  async post(resource, data) {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async put(resource, id, data) {
    const response = await fetch(`${API_URL}/${resource}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async login(username, password) {
    const users = await this.get(`users?username=${username}&password=${password}`);
    return users[0];
  },

  async register(user) {
    return this.post('users', user);
  },

  async getFriends(userId) {
    return this.get(`friends?userId=${userId}`);
  },

  async addFriend(friend) {
    return this.post('friends', friend);
  },

  async getAccounts(userId) {
    return this.get(`accounts?userId=${userId}`);
  },

  async addAccount(account) {
    return this.post('accounts', account);
  },

  async updateAccount(id, account) {
    return this.put('accounts', id, account);
  }
};