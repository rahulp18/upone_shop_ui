import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Layout, Loading } from "../components";
import StafCard from "../components/StafCard";
import { useGlobalContext } from "../context/context";
const Staf = () => {
  const initialState = {
    name: "",
    image: "",
    number: "",
    experience: "",
  };

  const { url, setLoading, loading, token, fetchAllStafs, stafData } =
    useGlobalContext();
  const [staf, setStaf] = useState(initialState);
  const [image, setImage] = useState([]);
  const [loadingStaf, setLoadingStaf] = useState(false);

  const handleOnChange = (e) => {
    setStaf({ ...staf, [e.target.name]: e.target.value });
  };

  const addStaf = async (e) => {
    e.preventDefault();

    try {
      setLoadingStaf(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(`${url}/staf`, staf);

      toast.success("Staf Addes successfully");
      setLoadingStaf(false);
      setStaf(initialState);
      fetchAllStafs();
    } catch (error) {
      console.log(error);
      setLoadingStaf(false);
      toast.error("Something went wrong");
    }
  };

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

  // fetch all stafs

  useEffect(() => {
    fetchAllStafs();
  }, []);

  return (
    <Layout select="stafs">
      <main>
        <Toaster />
        <div className="px-4 py-2 relative">
          <div className="flex items-center justify-start">
            <h1 className="text-md font-semibold text-gray-600 capitalize">
              Add new employees
            </h1>
          </div>
          <div className="mt-5">
            <form className="flex flex-col gap-2" onSubmit={addStaf}>
              <div className="flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white p-[2px] border-[3px] border-sky-400 overflow-hidden">
                  <img
                    src={
                      image.length === 0
                        ? "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
                        : image[0]
                    }
                    alt="profile"
                    className="h-full object-cover rounded-full w-full"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 w-full">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={staf.name}
                  required
                  onChange={handleOnChange}
                  placeholder="John Smith"
                  name="name"
                  className="input input-bordered text-black  input-sm  w-full max-w-xs"
                />
              </div>
              <div className=" flex flex-col gap-2 w-full">
                <label
                  for="phone"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Contact Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="number"
                  value={staf.number}
                  required
                  onChange={handleOnChange}
                  placeholder="9755165890"
                  className="input input-bordered text-black  input-sm  w-full max-w-xs"
                />
              </div>
              <div className=" flex flex-col gap-2 w-full">
                <label
                  for="image"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Add employee Image <span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  required
                  onChange={handleImageChange}
                  className="text-sm"
                />
              </div>
              <div className=" flex flex-col gap-2 w-full">
                <label
                  for="experience"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Experience <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  value={staf.experience}
                  required
                  onChange={handleOnChange}
                  placeholder="1 year/months"
                  className="input input-bordered text-black  w-full max-w-xs input-sm"
                />
              </div>
              <div className="flex items-center mt-2 justify-start">
                <button className="btn btn-sm bg-sky-600 border-none ">
                  {loadingStaf ? <Loading /> : "Add Staf"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5">
            <h1 className="text-md font-semibold text-black">Stafs Info</h1>
            <div>
              {stafData.length === 0 ? (
                <h1 className="text-md font-semibold">Add staf to grow !</h1>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {stafData.map((staf, index) => (
                    <StafCard key={index} staf={staf} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Staf;
