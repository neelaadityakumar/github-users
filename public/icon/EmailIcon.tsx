import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const EmailIcon: React.FC<IconProps> = ({
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
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default EmailIcon;
