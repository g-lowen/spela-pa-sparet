import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function InfoIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" stroke="#1976d2" strokeWidth="2" fill="#e3f2fd" />
      <rect x="11" y="10" width="2" height="7" rx="1" fill="#1976d2" />
      <rect x="11" y="7" width="2" height="2" rx="1" fill="#1976d2" />
    </SvgIcon>
  );
}
