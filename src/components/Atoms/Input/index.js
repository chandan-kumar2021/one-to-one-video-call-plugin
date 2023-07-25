import React from "react";
import style from './style.module.css'

function Input(props, ref) {
  const input = {
    height: "32px",
    width: '100%',
    flexShrink: 0,
    borderRadius: "11.56px",
    border: " 1px solid rgba(135, 135, 135, 0.18)",
    fontSize: '16px',
    marginBottom:' 0.5rem',
    marginTop: '0.5rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textIndent: '15px'
  };
  return <input type="text" {...props} style={input} className={style.input} ref={ref} />;
}

export default React.forwardRef(Input);
