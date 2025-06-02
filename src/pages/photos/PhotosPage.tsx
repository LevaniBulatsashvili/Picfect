import { useState } from "react";
import useFetchPhotos from "../../features/photos/hooks/useFetchPhotos";
import PhotoTable from "../../features/photos/components/PhotoTable";

const PhotosPage = () => {
  const [search, setSearch] = useState("red");
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useFetchPhotos(search, page);

  const onBack = (page: number = 1) => setPage((prev) => prev - page);
  const onForward = (page: number = 1) => setPage((prev) => prev + page);
  const onSearch = (search: string) => {
    if (search !== "") {
      setSearch(search);
      setPage(1);
    }
  };

  return (
    <PhotoTable
      data={data}
      loading={isLoading}
      error={error}
      currentPage={page}
      onBack={onBack}
      onForward={onForward}
      onSearch={onSearch}
    />
  );
};

export default PhotosPage;
