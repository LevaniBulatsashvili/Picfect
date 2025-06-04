import { useParams } from "react-router-dom";
import useFetchPhoto from "../../features/photo/hooks/useFetchPhoto";
import PhotoDetails from "../../features/photo/components/PhotoDetails";
import ErrorBoundary from "../../components/fallback/ErrorBoundary";
import Loading from "../../components/fallback/Loading";

const PhotoPage = () => {
  const { id } = useParams();
  const { data: photo, isLoading, error } = useFetchPhoto(id!);

  return (
    <ErrorBoundary error={error}>
      <div className="w-5xl h-full flex flex-col justify-center mx-auto p-6 bg-white shadow-md rounded-md">
        <Loading isLoading={isLoading}>
          <PhotoDetails photo={photo!} />
        </Loading>
      </div>
    </ErrorBoundary>
  );
};

export default PhotoPage;
