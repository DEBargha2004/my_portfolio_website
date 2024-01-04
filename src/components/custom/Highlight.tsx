import React from "react";

function Highlight({
  children,
  ...props
}: {
  children?: React.ReactNode & React.HTMLAttributes<HTMLSpanElement>;
}) {
  return <span className="text-[#ee2995b4]" {...props}>{children}</span>;
}

export default Highlight;
