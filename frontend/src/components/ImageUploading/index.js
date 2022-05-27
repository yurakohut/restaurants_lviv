import { Button } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";

const ImageUploading = ({ setImage }) => {
  const imageRef = useRef(null);

  const uploadFileHandler = async () => {
    const file = imageRef.current.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="contained-button-file">
        <input
          ref={imageRef}
          type="file"
          id="contained-button-file"
          onChange={uploadFileHandler}
          hidden
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default ImageUploading;
