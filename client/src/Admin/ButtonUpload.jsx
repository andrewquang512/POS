import React, { useRef } from "react";

const ButtonUpload = ({ text, src }) => {
  const fileInputRef = useRef();

  const handleChange = (e) => {
    // do something with event data
  };

  return (
    <>
      <button
        className="button-upload"
        onClick={() => fileInputRef.current.click()}
      >
        {text}
      </button>
      <input
        onChange={handleChange}
        multiple={false}
        ref={fileInputRef}
        type="file"
        hidden
      />
      <img src={src} alt="" className="button-upload-preview" />
    </>
  );
};
export default ButtonUpload;
