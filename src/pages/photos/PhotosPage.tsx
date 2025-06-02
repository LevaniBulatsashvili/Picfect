import { useState } from "react";
import useFetchOrSearchPhotos from "../../features/photos/hooks/useFetchPhotos";
import PhotoTable from "../../features/photos/components/PhotoTable";

const PhotosPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const { data, isLoading, error } = useFetchOrSearchPhotos(
    search,
    page,
    perPage
  );

  const onBack = (page: number = 1) => setPage((prev) => prev - page);
  const onForward = (page: number = 1) => setPage((prev) => prev + page);
  const onSearch = (search: string) => {
    setSearch(search);
    if (search !== "") setPage(1);
  };
  const onChangeTableSize = (size: number) => setPerPage(size);

  return (
    <PhotoTable
      data={data}
      loading={isLoading}
      error={error}
      currentPage={page}
      onBack={onBack}
      onForward={onForward}
      onSearch={onSearch}
      tableSize={perPage}
      onChangeTableSize={onChangeTableSize}
    />
  );
};

export default PhotosPage;
