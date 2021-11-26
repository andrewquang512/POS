import React, { useEffect, useRef, useState } from "react";

const ButtonUpload = ({
  isDisable,
  text,
  src,
  setProductUpdate,
  productUpdate,
}) => {
  const fileInputRef = useRef();
  const [imgPreview, setImgPreview] = useState({
    init: true,
    preview: src,
  });
  const handleChange = (e) => {
    // do something with event data
    setImgPreview({
      preview: URL.createObjectURL(e.target.files[0]),
      init: false,
    });
    setProductUpdate({
      ...productUpdate,
      img: e.target.files[0],
    });
  };
  useEffect(() => {
    return () => {
      if (!imgPreview.init) URL.revokeObjectURL(imgPreview.preview);
    };
  }, [imgPreview]);
  return (
    <>
      {/* <button
        style={{ display: isDisable ? "none" : "inline-flex" }}
        className="button-upload"
        onClick={() => fileInputRef.current.click()}
      >
        {text}
      </button> */}
      <input
        onChange={handleChange}
        multiple={false}
        ref={fileInputRef}
        type="file"
        hidden={isDisable}
      />
      <img
        src={imgPreview.preview}
        alt="Ảnh xem trước"
        className="button-upload-preview"
      />
    </>
  );
};
export default ButtonUpload;
