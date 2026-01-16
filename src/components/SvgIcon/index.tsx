type IconProps = {
  name: string;
  size?: number | string; // 允许传入 number 或 string :16,"16px"
  color?: string;
  className?: string;
  // 允许传递 onClick 等其他 SVG 属性
  [key: string]: any;
};

export function SvgIcon({
  name,
  size,
  color = "currentColor",
  className,
  ...props
}: IconProps) {
  // 如果传入了 size，则强制设置宽高样式；否则留空，让 className 控制
  const sizeStyle = size ? { width: size, height: size } : {};

  return (
    <svg
      fill={color}
      {...props}
      style={sizeStyle}
      className={`inline-block ${className}`}
      aria-hidden
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}
