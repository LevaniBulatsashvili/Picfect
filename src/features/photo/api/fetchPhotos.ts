import { REQUEST } from "../../../apiConfig";
import $apiAxios from "../../../http/apiAxios";

const fetchPhotos = async (search: string, page: number, perPage: number) => {
  const res = await $apiAxios.get(
    `${REQUEST.PHOTOS}?query=${search}&page=${page}&per_page=${perPage}`
  );
  return res.data;
};

export default fetchPhotos;
