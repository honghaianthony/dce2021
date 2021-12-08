import { storage } from "./index";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const deleteFile = (url) => {
  let storageRef = ref(storage, url);
  console.log(storageRef.name);
  // Create a reference to the file to delete
  const desertRef = ref(storage, `images/${storageRef.name}`);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};
const uploadFile = (image) => {
  let url;
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
      // setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        url = downloadURL;
      });
    }
  );
  return { url };
};

export { uploadFile, deleteFile };
