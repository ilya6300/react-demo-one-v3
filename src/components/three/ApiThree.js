import axios from "axios";

export default class ApiOne {
  static async getUserThree() {
    try {
      const responeThree = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      // console.log(responeThree.data["data"]);
      return responeThree.data["data"];
    } catch (e) {
      console.log(e);
    }
  }
}
