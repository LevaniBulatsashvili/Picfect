import type { IPhotoSearchRes } from "../../../interfaces/photo.interface";
import DataTable from "../../../components/table/DataTable";
import PhotoCard from "./PhotoCard";

interface IPhotoTable {
  data: IPhotoSearchRes | undefined;
  loading: boolean;
  error: Error | null;
  currentPage: number;
  onBack: (page: number) => void;
  onForward: (page: number) => void;
  onSearch: (search: string) => void;
}

const PhotoTable = ({
  data,
  loading,
  error,
  currentPage,
  onBack,
  onForward,
  onSearch,
}: IPhotoTable) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-2 w-full">
      <DataTable
        data={data?.results || []}
        loading={loading}
        error={error}
        currentPage={currentPage}
        allPages={data?.total_pages || 0}
        renderItem={(photo) => <PhotoCard photo={photo} />}
        onBack={onBack}
        onForward={onForward}
        onSearch={onSearch}
      />
    </div>
  );
};

export default PhotoTable;
