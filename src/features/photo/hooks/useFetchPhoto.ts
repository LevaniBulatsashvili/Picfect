import { useQuery } from "@tanstack/react-query";
import Query_Keys from "../../../react-query/query-keys";
import fetchPhoto from "../api/fetchPhoto";
import type { IPhoto } from "../interfaces/photo.interface";

const useFetchPhoto = (id: string) => {
  const result = useQuery<IPhoto>({
    queryKey: [Query_Keys.getPhoto],
    queryFn: () => fetchPhoto(id),
  });

  return result;
};

export default useFetchPhoto;
