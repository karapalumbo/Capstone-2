import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PetfinderApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

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

  /** Favorite pet */
  // static async favoritePet(username, pet_id) {
  //   await this.request(`users/${username}/pets/${pet_id}`, {}, "post");
  // }

  /** Get pets */
  static async getPets(searchTerm) {
    let res = await this.request("pets", { searchTerm });
    return res.pets;
  }

  /** Get details on a pet by pet id */
  static async getPet(pet_id) {
    let res = await this.request(`pets/${pet_id}`);
    return res.pet;
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

  /** Save user profile updates */
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default PetfinderApi;
