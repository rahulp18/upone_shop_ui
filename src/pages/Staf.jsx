import React from "react";
import { Layout } from "../components";
import StafCard from "../components/StafCard";

const Staf = () => {
  const addStaf = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <Layout select="stafs">
      <main>
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
                      "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
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
                  // value={formData.email}
                  required
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
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
                  name="phone"
                  // value={formData.email}
                  required
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
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
                  // value={formData.email}
                  required
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
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
                  // value={formData.email}
                  required
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                  placeholder="1 year"
                  className="input input-bordered text-black  w-full max-w-xs input-sm"
                />
              </div>
              <div className="flex items-center mt-2 justify-start">
                <button className="btn btn-sm bg-sky-600 border-none">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5">
            <h1 className="text-md font-semibold text-black">Stafs Info</h1>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <StafCard key={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Staf;
