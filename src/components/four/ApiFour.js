import localjson from './localJSON.json';

export default class ApiFour {
 getUserFour = () => {
    try {
      return localjson["data"];
      // return responeFour["data"];
    } catch (e) {
      console.log(e);
    }
  }
}
