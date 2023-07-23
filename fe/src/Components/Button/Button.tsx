interface ButtonProps {
  text: string;
  width?: number;
  color?: string;
  onClick: Function;
  className?: string;
}

export default function Button({
  text,
  onClick,
  width,
  color,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick(e);
      }}
      className={`w-${width || "fit"} bg-${
        color || "j-lemon"
      } rounded-lg px-2 text-white ${className}`}
    >
      {text}
    </button>
  );
}
