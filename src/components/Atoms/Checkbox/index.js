import React from "react";
// import style from './style.module.css'

function Checkbox(props, ref) {
  const radio = {
    width: "15px",
    height: "15px",
    flexShrink: 0,
    borderRadius: "4.56px",
    border: "1px solid rgba(135, 135, 135, 0.18)",
    boxShadow: " 0px 1px 4px 0px rgba(0, 0, 0, 0.07)",
  };
  return (
    <>
      <input type="checkbox" {...props} style={radio} ref={ref} />
    </>
  );
}

export default React.forwardRef(Checkbox);
