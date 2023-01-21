import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCameraFill } from "react-icons/bs";
import { useGlobalContext } from "../context/context";

const EditImageStaf = ({ data, id, fetchStafInfo }) => {
  const { url, token } = useGlobalContext();
  const initialState = {
    image: data?.image?.url,
  };
  const [staf, setStaf] = useState(initialState);
  const [image, setImage] = useState([data?.image?.url]);
  const [loadingStaf, setLoadingStaf] = useState(false);
  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // console.log(reader.result);
        setStaf({ ...staf, image: reader.result });
      };
    });
  };

  const handleImageChange = (e) => {
    handleImages(e);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setImage(filesArray);
    }
  };

  const hadnleSubmit = async (e) => {
    e.preventDefault();
    console.log(staf);
    try {
      setLoadingStaf(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/staf/image/edit/${id}`, {
        newImage: staf.image,
        oldImage: data.image.public_id,
      });
      console.log(res);
      toast.success("Staf Edit successfully");
      setLoadingStaf(false);

      fetchStafInfo();
    } catch (error) {
      console.log(error);
      setLoadingStaf(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <input type="checkbox" id="editImageStaf" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editImageStaf"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Change Image</h3>

          <form
            action=""
            onSubmit={hadnleSubmit}
            className="flex flex-col gap-2"
          >
            <img
              src={
                image.length === 0
                  ? "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
                  : image[0]
              }
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="mt-4">
              <input
                type="file"
                id="images"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="label-holder">
                <label
                  htmlFor="images"
                  className="btn capitalize  text-center gap  btn-sm bg-sky-600 border-none"
                >
                  <BsCameraFill className="mx-1" /> Choose Image
                </label>
              </div>
            </div>
            <button className="btn btn-sm">
              {loadingStaf ? "Uodating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditImageStaf;
