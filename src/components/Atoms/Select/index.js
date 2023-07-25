import React from "react";

function Select(props, ref) {
  const select = {
    height: "32px",
    flexShrink: 0,
    borderRadius: "11.56px",
    border: " 1px solid rgba(135, 135, 135, 0.18)",
    fontSize: '14px',
    marginBottom:' 0.5rem',
    marginTop: '0.5rem',
    fontWeight: '400',
    lineHeight: 'normal',
    color: '#212529',
    fontStyle: 'normal',
    background: 'transparent'
  };

  return <select {...props} style={select} ref={ref}>
    {/* <option>+91</option>
    <option>+1</option> */}
  </select>;
}
export default React.forwardRef(Select);;
