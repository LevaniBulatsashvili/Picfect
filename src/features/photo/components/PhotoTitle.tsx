interface IPhotoTitle {
  title: string;
}

const PhotoTitle = ({ title }: IPhotoTitle) => (
  <h1 className="text-3xl font-extrabold text-blue-700 text-center">{title}</h1>
);

export default PhotoTitle;
