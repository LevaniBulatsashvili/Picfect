import { Link } from "react-router-dom";
import type { IPhoto } from "../interfaces/photo.interface";
import { PAGE } from "../../../pages/pageConfig";

interface IPhotoCard {
  photo: IPhoto;
}

const PhotoCard = ({ photo }: IPhotoCard) => {
  return (
    <Link
      to={`${PAGE.PHOTOS}/${photo.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-xl cursor-pointer duration-300 w-full max-w-sm"
    >
      <img
        src={photo.urls.small}
        alt={photo.description || "Unsplash Photo"}
        className="w-full h-50 object-cover"
        loading="lazy"
      />

      <div className="p-4 space-y-2">
        <p className="truncate text-sm text-gray-800 line-clamp-2">
          {photo.alt_description}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>❤️ {photo.likes}</span>
          <span>{photo.user.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
