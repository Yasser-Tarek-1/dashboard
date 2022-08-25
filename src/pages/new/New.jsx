import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./New.scss";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const New = ({ inputs, title, type }) => {
  // Users
  const [fileUser, setFileUser] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [perUser, setPerUser] = useState(null);
  // Product
  const [dataProduct, setDataProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const uploadImg = () => {
      const name = new Date().getTime() + fileUser.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, fileUser);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerUser(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDataUser((prev) => {
              return { ...prev, img: downloadURL };
            });
          });
        }
      );
    };
    fileUser && uploadImg();
  }, [fileUser]);

  const addHandler = async (e) => {
    e.preventDefault();
    if (type === "users") {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          dataUser.email,
          dataUser.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          ...dataUser,
          timeStamp: serverTimestamp(),
        });
        navigate(-1);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          ...dataProduct,
          timeStamp: serverTimestamp(),
        });
        navigate(-1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputHandler = (e) => {
    if (type === "users") {
      const id = e.target.id;
      const value = e.target.value;
      setDataUser((prev) => {
        return { ...prev, [id]: value };
      });
    } else {
      const id = e.target.id;
      const value = e.target.value;
      setDataProduct((prev) => {
        return { ...prev, [id]: value };
      });
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="new_container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {type === "users" && (
            <div className="left">
              <img
                src={
                  fileUser
                    ? URL.createObjectURL(fileUser)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
                className="user_img"
              />
            </div>
          )}

          <div className="right">
            <form onSubmit={addHandler}>
              <div className="user_input">
                {type === "users" && (
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                )}
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFileUser(e.target.files[0])}
                />
              </div>
              {inputs.map((item) => {
                return (
                  <div className="user_input" key={item.id}>
                    <label htmlFor={item.id}>{item.label}</label>
                    <input
                      type={item.type}
                      required
                      id={item.id}
                      placeholder={item.placeholder}
                      onChange={inputHandler}
                    />
                  </div>
                );
              })}
              <div className="btn">
                <button
                  disabled={(perUser !== null) & (perUser < 100)}
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
