interface IPhotoImage {
  src: string;
  alt: string;
}

const PhotoImage = ({ src, alt }: IPhotoImage) => (
  <div className="aspect-[7/2] overflow-hidden rounded-md">
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-full rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
);

export default PhotoImage;
