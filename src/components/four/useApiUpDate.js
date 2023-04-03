import axios from "axios";

export const useApiUpDate = (callback) => {

const fetching = async () => {
try  {
    await callback()
} catch (e) {
    console.log(e);
}
}

return [fetching]

}