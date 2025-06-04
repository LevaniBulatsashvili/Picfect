import type { IPhoto } from "../../../interfaces/photo.interface";
import PhotographerInfo from "./PhotographerInfo";
import PhotoImage from "./PhotoImage";
import PhotoInfo from "./PhotoInfo";
import PhotoTags from "./PhotoTags";
import PhotoTitle from "./PhotoTitle";

interface IPhotoDetails {
  photo: IPhoto;
}

const PhotoDetails = ({ photo }: IPhotoDetails) => {
  return (
    <div className="max-w-sm 2xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-lg">
      <PhotoImage
        src={photo.urls?.full || ""}
        alt={photo.alt_description || "Photo"}
      />
      <PhotoTitle
        title={
          photo.alt_description || photo.description || photo.slug || "N/A"
        }
      />
      <PhotoInfo photo={photo} />
      <PhotoTags tags={photo.tags} />
      <PhotographerInfo photo={photo} />
    </div>
  );
};

export default PhotoDetails;
