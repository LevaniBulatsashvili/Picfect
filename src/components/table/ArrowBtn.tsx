import type { ReactNode } from "react";

interface IArrowBtn {
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}

const ArrowBtn = ({ disabled, onClick, children }: IArrowBtn) => {
  return (
    <button
      onClick={onClick}
      className={disabled ? "opacity-50 cursor-default!" : ""}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ArrowBtn;
