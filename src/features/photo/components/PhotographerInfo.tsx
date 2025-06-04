import { Link } from "react-router-dom";
import type { IPhoto } from "../../../interfaces/photo.interface";

interface IPhotographerInfo {
  photo: IPhoto;
}

const PhotographerInfo = ({ photo }: IPhotographerInfo) => (
  <div className="relative inline-block group mt-6">
    <button
      className="text-blue-600 font-semibold underline cursor-pointer"
      aria-describedby="photographer-info"
      aria-haspopup="true"
      type="button"
    >
      About the Photographer
    </button>

    <div
      id="photographer-info"
      className="absolute top-2 left-20 z-10 w-80 text-gray-800 p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-300/70 rounded-xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-opacity duration-300
      pointer-events-auto
      -translate-y-full
      translate-x-1/4"
      role="dialog"
      aria-modal="false"
    >
      <h3 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-2">
        Photographer Details
      </h3>

      <p className="text-sm mb-2">
        <strong>Name:</strong> {photo.user.name}
      </p>
      <p className="text-sm mb-2">
        <strong>Bio:</strong> {photo.user.bio || "No bio available."}
      </p>
      <p className="text-sm">
        <strong>Portfolio:</strong>{" "}
        <Link
          to={photo.user.portfolio_url}
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Portfolio
        </Link>
      </p>
    </div>
  </div>
);

export default PhotographerInfo;
