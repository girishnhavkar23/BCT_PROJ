import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";

import UploadICON from "./SVG/UploadICON";

const UploadLogo = ({
  setimageURL,
  imageURL,
  setLoader,
  PINATA_AIP_KEY,
  PINATA_API_KEY,
  PINATA_SECRECT_KEY,
}) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const uploadToIPFS = async (file) => {
    console.log("File");
    if (file) {
      try {
        setLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "Post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: PINATA_API_KEY,
            pinata_secret_api_key: PINATA_SECRECT_KEY,
            "Content-Type": "multipart/form-data",
          },
        });

        const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        setimageURL(url);
        setLoader(false);
        notifySuccess("Logo uploaded successfully");
      } catch (error) {
        setLoader(false);
        notifyError("Error uploading logo");
        console.log(error);
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToIPFS(acceptedFile[0]);
  });

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    maxSize: 500000000000,
  });
  return (
    <>
      {imageURL ? (
        <div>
          <img
            src={imageURL}
            style={{ width: "200px", height: "auto" }}
            alt=""
          />
        </div>
      ) : (
        <div {...getRootProps()}>
          <label for="file" className="custum-file-upload">
            <div className="icon">
              <UploadICON />
            </div>
            <div className="text">
              <span>click to upload logo</span>
            </div>
            <input type="file" id="file" {...getInputProps()}></input>
          </label>
        </div>
      )}
    </>
  );
};

export default UploadLogo;

// import React, { useCallback } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useDropzone } from "react-dropzone";
// import UploadICON from "./SVG/UploadICON";

// const UploadLogo = ({
//   setimageURL,
//   imageURL,
//   setLoader,
//   PINATA_API_KEY,
//   PINATA_SECRET_KEY,
// }) => {
//   const notifySuccess = (msg) => toast.success(msg, { duration: 200 });
//   const notifyError = (msg) => toast.error(msg, { duration: 200 });

//   const uploadToIPFS = async (file) => {
//     if (file) {
//       try {
//         setLoader(true);
//         const formData = new FormData();
//         formData.append("file", file);

//         const response = await axios({
//           method: "post",
//           url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//           data: formData,
//           maxBodyLength: "Infinity",
//           headers: {
//             pinata_api_key: PINATA_API_KEY,
//             pinata_secret_api_key: PINATA_SECRET_KEY,
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
//         setimageURL(url);
//         setLoader(false);
//         notifySuccess("Logo uploaded successfully");
//       } catch (error) {
//         setLoader(false);
//         notifyError("Error uploading logo");
//         console.log(error);
//       }
//     }
//   };

//   const onDrop = useCallback(async (acceptedFiles) => {
//     await uploadToIPFS(acceptedFiles[0]);
//   }, []);

//   const { getInputProps, getRootProps } = useDropzone({
//     onDrop,
//     maxSize: 5000000,  // Set maxSize to 5 MB
//   });

//   return (
//     <>
//       {imageURL ? (
//         <div>
//           <img src={imageURL} style={{ width: "200px", height: "auto" }} alt="Uploaded Logo" />
//         </div>
//       ) : (
//         <div {...getRootProps()}>
//           <label htmlFor="file" className="custom-file-upload">
//             <div className="icon">
//               <UploadICON />
//             </div>
//             <div className="text">
//               <span>Click to upload logo</span>
//             </div>
//             <input type="file" id="file" {...getInputProps()} />
//           </label>
//         </div>
//       )}
//     </>
//   );
// };

// export default UploadLogo;


