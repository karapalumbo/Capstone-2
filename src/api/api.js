import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PetfinderApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PetfinderApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get user */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Save user profile updates */
  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Get pets */
  static async getPets(name) {
    let res = await this.request(`pets`, { name });
    return res.pets;
  }

  /** Get details on a pet by pet id */
  static async getPet(pet_id) {
    let res = await this.request(`pets/${pet_id}`);
    return res.pet;
  }

  /** Favorite a pet */
  static async favoriteAPet(username, pet_id) {
    await this.request(`users/${username}/pets/${pet_id}`, {}, "post");
  }

  /** Unfavorite a pet */
  static async unfavoriteAPet(username, pet_id) {
    await this.request(`users/${username}/pets/delete/${pet_id}`, {}, "delete");
  }

  /** Get details on a organization based on id */
  static async getOrganization(orgID) {
    let res = await this.request(`pets/organization/${orgID}`);
    return res.org;
  }

  /** User signup */
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** User login */
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }
}

export default PetfinderApi;
