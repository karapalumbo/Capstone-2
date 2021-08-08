import axios from "axios";
import { API_KEY, API_TOKEN, API_SECRET } from "../secret";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PetfinderApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${API_TOKEN}` };
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

  /** Apply to job */
  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }

  /** Get jobs */
  static async getJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
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
