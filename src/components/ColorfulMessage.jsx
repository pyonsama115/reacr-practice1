import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入で取り出す！
  const { color, children } = props;
  const contentStyle = {
    color,
    fontWeight: "bold"
  };

  return <p style={contentStyle}>{children}</p>;
};
