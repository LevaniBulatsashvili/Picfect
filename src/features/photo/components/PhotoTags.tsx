interface IPhotoTags {
  tags: { title: string }[];
}

const PhotoTags = ({ tags }: IPhotoTags) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-gray-700 tracking-wide mb-2 border-b border-gray-200 pb-1">
      Tags
    </h2>
    <div
      className="flex overflow-x-auto whitespace-nowrap gap-x-2 p-2 border border-gray-200 rounded-md bg-white scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 scroll-pl-2 scroll-pr-2"
      role="list"
      aria-label="Photo tags"
    >
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 font-medium px-4 py-1.5 rounded-full text-sm  hover:bg-blue-200 cursor-pointer"
          role="listitem"
        >
          {tag.title}
        </span>
      ))}
    </div>
  </div>
);

export default PhotoTags;
