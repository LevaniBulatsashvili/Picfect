import { useQuery } from "@tanstack/react-query";
import Query_Keys from "../../../react-query/query-keys";
import fetchPhotos from "../api/fetchPhotos";
import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";

const useFetchPhotos = (
  search: string = " ",
  page: number = 1,
  perPage: number = 20
) => {
  return useQuery<IPhotoSearchRes>({
    queryKey: [Query_Keys.getPhotos, search, page],
    queryFn: () => fetchPhotos(search, page, perPage),
  });
};

export default useFetchPhotos;
