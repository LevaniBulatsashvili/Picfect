import { REQUEST } from "../../../apiConfig";
import $apiAxios from "../../../http/apiAxios";

const searchPhotos = async (search: string, page: number, perPage: number) => {
  const res = (
    await $apiAxios.get(
      `${REQUEST.SEARCHPHOTOS}?query=${search}&page=${page}&per_page=${perPage}`
    )
  ).data;

  return res;
};

export default searchPhotos;
