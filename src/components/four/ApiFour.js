import axios from "axios";

export default class ApiFour {
  static async getUserFour() {
    try {
      // const response = await axios.get("http://localhost:3000/data");
      // return response.data;

      const response = await axios.get("http://localhost:3000/data");
      // console.log(response.data)
      return response.data;

    } catch (e) {
      console.log(e);
    }
  }
}
