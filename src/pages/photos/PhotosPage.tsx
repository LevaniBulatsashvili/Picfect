import { useState } from "react";
import useFetchOrSearchPhotos from "../../features/photos/hooks/useFetchPhotos";
import PhotoTable from "../../features/photos/components/PhotoTable";
import ErrorBoundary from "../../components/fallback/ErrorBoundary";
import { stringToNum } from "../../utils/stringToNum";

const PhotosPage = () => {
  const [search, setSearch] = useState(
    localStorage.getItem("searchTerm") ?? ""
  );

  const [page, setPage] = useState(
    stringToNum(localStorage.getItem("currentPage"), 1)
  );

  const [perPage, setPerPage] = useState(
    stringToNum(localStorage.getItem("pageSize"), 20)
  );

  const { data, isLoading, error } = useFetchOrSearchPhotos(
    search,
    page,
    perPage
  );

  const onBack = (page: number = 1) =>
    setPage((prev) => {
      localStorage.setItem("currentPage", (prev - page).toString());
      return prev - page;
    });

  const onForward = (page: number = 1) =>
    setPage((prev) => {
      localStorage.setItem("currentPage", (prev + page).toString());
      return prev + page;
    });

  const onSearch = (searchFor: string) => {
    const trimmed = searchFor.trim();

    if (search !== trimmed) {
      setPage(1);
      localStorage.setItem("currentPage", "1");
    }

    setSearch(trimmed);
    localStorage.setItem("searchTerm", trimmed);
  };

  const onChangeTableSize = (size: number) => {
    setPerPage(size);
    localStorage.setItem("pageSize", size.toString());
  };

  return (
    <ErrorBoundary error={error}>
      <PhotoTable
        data={data}
        loading={isLoading}
        currentPage={page}
        onBack={onBack}
        onForward={onForward}
        searchVal={search}
        onSearch={onSearch}
        tableSize={perPage}
        onChangeTableSize={onChangeTableSize}
      />
    </ErrorBoundary>
  );
};

export default PhotosPage;
