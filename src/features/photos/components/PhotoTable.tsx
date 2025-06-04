import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";
import DataTable from "../../../components/table/DataTable";
import PhotoCard from "./PhotoCard";

interface IPhotoTable {
  data: IPhotoSearchRes | undefined;
  loading: boolean;
  currentPage: number;
  onBack: (page: number) => void;
  onForward: (page: number) => void;
  searchVal?: string;
  onSearch: (search: string) => void;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
}

const PhotoTable = ({
  data,
  loading,
  currentPage,
  onBack,
  onForward,
  searchVal,
  onSearch,
  tableSize,
  onChangeTableSize,
}: IPhotoTable) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-2 w-full">
      <DataTable
        data={data?.results || []}
        loading={loading}
        currentPage={currentPage}
        allPages={data?.total_pages || 0}
        renderItem={(photo) => <PhotoCard photo={photo} />}
        onBack={onBack}
        onForward={onForward}
        searchVal={searchVal}
        onSearch={onSearch}
        tableSize={tableSize}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default PhotoTable;
