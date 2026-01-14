type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

export function SvgIcon({
  name,
  size = 16,
  color = "currentColor",
  className,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      aria-hidden
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}
