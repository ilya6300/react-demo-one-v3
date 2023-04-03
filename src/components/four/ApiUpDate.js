import axios from "axios";

export default class ApiUpDate {
  static async getApiUpDate() {
    try {
      const response = await axios.put("http://localhost:3000/data");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}