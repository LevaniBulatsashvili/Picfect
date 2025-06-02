import { useParams } from "react-router-dom";
import useFetchPhoto from "../../features/photo/hooks/useFetchPhoto";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const PhotoPage = () => {
  const { id } = useParams();
  const { data: photo, isLoading, error } = useFetchPhoto(id!);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <div>PhotoPage</div>;
};

export default PhotoPage;
