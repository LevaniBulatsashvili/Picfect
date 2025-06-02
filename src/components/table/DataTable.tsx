import React from "react";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Spinner from "../Spinner";
import Error from "../Error";

interface IDataTAble<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  currentPage: number;
  allPages: number;
  renderItem: (item: T) => React.ReactNode;
  onBack: (page: number) => void;
  onForward: (page: number) => void;
  onSearch: (search: string) => void;
}

const DataTable = <T,>({
  data,
  loading,
  error,
  currentPage,
  allPages,
  renderItem,
  onBack,
  onForward,
  onSearch,
}: IDataTAble<T>) => {
  return (
    <div className="w-full min-h-[86dvh] flex flex-col justify-between">
      <div className="flex items-center justify-center mb-2">
        <SearchBar onSearch={onSearch} disabled={loading || !!error} />
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        <ItemList items={data} renderItem={renderItem} />
      )}

      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        onBack={onBack}
        onForward={onForward}
      />
    </div>
  );
};

export default DataTable;
