import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddPro = () => {
  const [proImg, setProImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("Chef");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!proImg) {
        return toast.error("Image not seleted");
      }
      const formData = new FormData();

      formData.append("image", proImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-professional",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setProImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full flex justify-center">
      <div className="bg-white px-5 py-5 border rounded-lg w-full max-w-4xl shadow-lg">
        <p className="mb-3 text-xl font-semibold text-gray-800 text-center">
          Add Professional
        </p>

        {/* Upload Professional Picture */}
        <div className="flex items-center gap-4 mb-5">
          <label htmlFor="pro-img" className="cursor-pointer">
            <img
              className="w-20 h-20 bg-gray-100 rounded-full object-cover border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all"
              src={proImg ? URL.createObjectURL(proImg) : assets.upload_area}
              alt="Upload Professional Picture"
            />
          </label>
          <input
            onChange={(e) => setProImg(e.target.files[0])}
            type="file"
            id="pro-img"
            className="hidden"
          />
          <div>
            <p className="text-gray-600 font-medium">
              Upload Professional Picture
            </p>
            <p className="text-sm text-gray-400">
              Recommended size: 200x200 pixels
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">
                Professional Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">
                Professional Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">
                Professional Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">Experience</label>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                {[...Array(15)].map((_, i) => (
                  <option key={i} value={`${i + 1} year`}>
                    {i + 1} year
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">Visiting Fees</label>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black "
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">Speciality</label>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="Chef">Chef</option>
                <option value="Barber">Barber</option>
                <option value="Painter">Painter</option>
                <option value="Plumber">Plumber</option>
                <option value="Mechanic">Mechanic</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Technician">Technician</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">Education</label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium">Address</label>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Address Line 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                placeholder="Address Line 2"
              />
            </div>
          </div>
        </div>

        {/* About Professional */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium">
            About Professional
          </label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Write about the professional..."
            rows={3}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 w-full lg:w-auto px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Add Professional
        </button>
      </div>
    </form>
  );
};

export default AddPro;
