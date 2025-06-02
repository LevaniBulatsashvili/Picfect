import { REQUEST } from "../../apiConfig";
import $apiAxios from "../../http/apiAxios";

const fetchPhoto = async (id: string) => {
  const res = await $apiAxios.get(`${REQUEST.PHOTO}/${id}`);
  return res.data;
};

export default fetchPhoto;
