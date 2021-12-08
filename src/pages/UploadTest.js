import React, { useState } from "react";
import { storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

function UploadTest() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDelete = () => {
    let storageRef = ref(storage, url);
    console.log(storageRef.name);
    // Create a reference to the file to delete
    const desertRef = ref(storage, `images/${storageRef.name}`);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        alert("Xóa thành công");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  const handleUpload = async () => {
    const storageRef = ref(storage, `images/${Date.now()}-${image.name}`);

    const metadata = {
      contentType: "image/*",
    };

    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <br />
      <a href={url}>{url}</a>
      <br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
    </div>
  );
}

export default UploadTest;
