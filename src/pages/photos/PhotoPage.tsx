import { useParams } from "react-router-dom";
import useFetchPhoto from "../../features/photo/hooks/useFetchPhoto";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import PhotoDetails from "../../features/photo/components/PhotoDetails";

const PhotoPage = () => {
  const { id } = useParams();
  const { data: photo, isLoading, error } = useFetchPhoto(id!);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        <PhotoDetails photo={photo!} />
      )}
    </div>
  );
};

export default PhotoPage;
