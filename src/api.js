const API_URL = 'http://localhost:3002';
const FAKE_URL = 'https://run.mocky.io/v3';

export const api = {
  async get(resource, query = "") {
    const response = await fetch(`${API_URL}/${resource}${query}`);
    return response.json();
  },

  async getFake(resource) {
    const response = await fetch(`${FAKE_URL}/${resource}`);
    return response.json();
  },

  async post(resource, data) {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async put(resource, id, data) {
    const response = await fetch(`${API_URL}/${resource}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getUser(username, password) {
    const response = await this.getFake(`c22b63d8-deca-4f38-9393-12ed128ea072`);
    return response.users[0];
  },

  async getFriends() {
    const response = await this.getFake(`8141aacb-b66d-4093-b2bf-6ddb5163aabb`);
    return response.friends;
  },

  async getAccounts() {
    const response = await this.getFake(`8141aacb-b66d-4093-b2bf-6ddb5163aabb`);
    return response.accounts;
  },

  async login(username, password) {
    const users = await this.get(`users?username=${username}&password=${password}`);
    return users[0];
  },

  async register(user) {
    return this.post("users", user);
  },

  // testar com json server
  // async getFriends(userId) {
  //   return this.get(`friends?userId=${userId}`);
  // },

  async addFriend(friend) {
    return this.post("friends", friend);
  },

  // testar com json server
  // async getAccounts(userId) {
  //   return this.get(`accounts?userId=${userId}`);
  // },

  async addAccount(account) {
    return this.post("accounts", account);
  },

  async updateAccount(id, account) {
    return this.put("accounts", id, account);
  },
};
