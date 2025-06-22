import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const DateIcon: React.FC<IconProps> = ({
  width = 16,
  height = 16,
  ...rest
}) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...rest}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13a2 2 0 002 2h6a2 2 0 002-2L16 7"
    />
  </svg>
);

export default DateIcon;
