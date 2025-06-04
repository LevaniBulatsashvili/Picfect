import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import ArrowBtn from "./ArrowBtn";
import TableSizeControl from "./TableSizeControl";

interface IPagination {
  currentPage: number;
  allPages: number;
  onBack: (page: number) => void;
  onForward: (page: number) => void;
  tableSize: number;
  onChangeTableSize: (size: number) => void;
}

const Pagination = ({
  currentPage,
  allPages,
  onBack,
  onForward,
  tableSize,
  onChangeTableSize,
}: IPagination) => {
  return (
    <div className="relative flex justify-between items-center mt-2">
      <div className="flex items-center justify-center grow">
        <ArrowBtn
          onClick={() => onBack(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </ArrowBtn>
        <ArrowBtn onClick={() => onBack(10)} disabled={currentPage <= 10}>
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </ArrowBtn>
        <ArrowBtn onClick={() => onBack(1)} disabled={currentPage <= 1}>
          <ChevronLeftIcon className="w-5 h-5" />
        </ArrowBtn>

        <span className="text-md text-gray-700 font-bold font-mono text-center w-[150px]">
          Page {String(currentPage).padStart(2, "0")} of{" "}
          {String(allPages).padStart(2, "0")}
        </span>

        <ArrowBtn
          onClick={() => onForward(1)}
          disabled={currentPage >= allPages}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </ArrowBtn>

        <ArrowBtn
          onClick={() => onForward(10)}
          disabled={currentPage > allPages - 9}
        >
          <ChevronDoubleRightIcon className="w-5 h-5" />
        </ArrowBtn>
        <ArrowBtn
          onClick={() => onForward(allPages - currentPage)}
          disabled={currentPage >= allPages}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </ArrowBtn>
      </div>

      <TableSizeControl
        tableSize={tableSize}
        sizeSettings={[10, 20, 30]}
        onChangeTableSize={onChangeTableSize}
      />
    </div>
  );
};

export default Pagination;
