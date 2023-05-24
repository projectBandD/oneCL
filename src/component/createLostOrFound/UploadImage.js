import React, { useState } from "react";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  function fileSelectedHandler(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }
  

  function fileUploadHandler() {
    // Replace the URL with your own endpoint
    const url = "https://example.com/upload";
    const formData = new FormData();
    formData.append("image", selectedFile);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle successful uploads
      })
      .catch((error) => {
        // Handle errors
      });
  }

  return (
    <div>
            {/* <input type="file" onChange={handleImageUpload} accept="image/*" /> */}


            <label>בחירת תמונה</label>
      <input type="file" onChange={fileSelectedHandler} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
      )}
      {selectedFile && <button onClick={fileUploadHandler}>Upload</button>}
    </div>
  );
}

export default ImageUploader