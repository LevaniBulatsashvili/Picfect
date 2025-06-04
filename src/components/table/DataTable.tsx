import React from "react";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Loading from "../fallback/Loading";

interface IDataTAble<T> {
  data: T[];
  loading: boolean;
  currentPage: number;
  allPages: number;
  renderItem: (item: T) => React.ReactNode;
  onBack: (page: number) => void;
  onForward: (page: number) => void;
  searchVal?: string;
  onSearch: (search: string) => void;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
}

const DataTable = <T,>({
  data,
  loading,
  currentPage,
  allPages,
  renderItem,
  onBack,
  onForward,
  searchVal,
  onSearch,
  tableSize,
  onChangeTableSize,
}: IDataTAble<T>) => {
  return (
    <div className="w-full min-h-[86dvh] flex flex-col justify-between">
      <div className="flex items-center justify-center mb-2">
        <SearchBar
          onSearch={onSearch}
          disabled={loading}
          searchVal={searchVal}
        />
      </div>

      <Loading isLoading={loading}>
        <ItemList items={data} renderItem={renderItem} />
      </Loading>

      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        onBack={onBack}
        onForward={onForward}
        tableSize={tableSize}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default DataTable;
