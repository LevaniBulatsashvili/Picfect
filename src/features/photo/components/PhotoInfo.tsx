import type { IPhoto } from "../../../interfaces/photo.interface";

interface IInfoItem {
  label: string;
  value: string | number;
}

const InfoItem = ({ label, value }: IInfoItem) => (
  <p className="text-gray-700">
    <strong className="font-semibold text-gray-900">{label}:</strong> {value}
  </p>
);

interface IPhotoInfo {
  photo: IPhoto;
}

const PhotoInfo = ({ photo }: IPhotoInfo) => (
  <div className="grid grid-cols-1 gap-4">
    <div className="space-y-3">
      <InfoItem label="Photographer" value={photo.user.name} />
      <InfoItem
        label="Location"
        value={
          photo.location.city && photo.location.country
            ? `${photo.location.city}, ${photo.location.country}`
            : "N/A"
        }
      />
      <InfoItem label="Downloads" value={photo.downloads.toLocaleString()} />
      <InfoItem label="Likes" value={photo.likes.toLocaleString()} />
    </div>
    <div className="space-y-3">
      <InfoItem label="Camera" value={photo.exif.name || "N/A"} />
      <InfoItem label="Exposure" value={photo.exif.exposure_time || "N/A"} />
      <InfoItem label="Aperture" value={photo.exif.aperture || "N/A"} />
      <InfoItem label="ISO" value={photo.exif.iso || "N/A"} />
    </div>
  </div>
);

export default PhotoInfo;
