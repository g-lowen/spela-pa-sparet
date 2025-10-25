export const BatIcon = () => (
  <svg width="60" height="30" viewBox="0 0 120 60">
    {/* Wings */}
    <path
      d="M10,40 Q30,10 60,30 Q90,10 110,40 Q90,30 60,50 Q30,30 10,40 Z"
      fill="#222"
      stroke="#000"
      strokeWidth="2"
    />
    {/* Body */}
    <ellipse
      cx="60"
      cy="40"
      rx="12"
      ry="18"
      fill="#222"
      stroke="#000"
      strokeWidth="2"
    />
    {/* Head */}
    <ellipse
      cx="60"
      cy="25"
      rx="8"
      ry="8"
      fill="#222"
      stroke="#000"
      strokeWidth="2"
    />
    {/* Ears */}
    <polygon
      points="52,18 56,10 58,22"
      fill="#222"
      stroke="#000"
      strokeWidth="1"
    />
    <polygon
      points="68,18 64,10 62,22"
      fill="#222"
      stroke="#000"
      strokeWidth="1"
    />
    {/* Eyes */}
    <ellipse cx="57" cy="25" rx="1.5" ry="2" fill="#fff" />
    <ellipse cx="63" cy="25" rx="1.5" ry="2" fill="#fff" />
  </svg>
);
