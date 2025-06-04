import { useQuery } from "@tanstack/react-query";
import Query_Keys from "../../../react-query/query-keys";
import searchPhotos from "../api/searchPhotos";
import fetchPhotos from "../api/fetchPhotos";
import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";

const useFetchOrSearchPhotos = (
  search: string = "",
  page: number = 1,
  perPage: number = 20
) => {
  return useQuery<IPhotoSearchRes>({
    queryKey: [
      search ? Query_Keys.searchPhotos : Query_Keys.getPhotos,
      search,
      page,
      perPage,
    ],
    queryFn: () =>
      search ? searchPhotos(search, page, perPage) : fetchPhotos(page, perPage),
  });
};

export default useFetchOrSearchPhotos;
