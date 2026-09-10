import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import axios from "axios";
import { BASE_URL } from "../config/API";
import { toast } from "react-toastify";

function AddProduct({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const resp = await axios.post(`${BASE_URL}/products`, formData, {
        headers: { token },
      });
      if (resp.data.succces) {
        toast.success(resp.data.message);
        setName("");
        setDescription("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setPrice("");
      } else {
        toast.error(resp.data.message);
      }
      console.log(resp.data);
    } catch (error) {
      // toast.error(error.message);
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full items-start gap-3">
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-4">
          <label
            htmlFor="image1"
            className="border my-3 flex justify-center flex-col items-center w-[100px] h-[100px] rounded-lg"
          >
            <img
              src={!image1 ? upload_icon : URL.createObjectURL(image1)}
              alt="upload icon"
            />
            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>
          <label
            htmlFor="image2"
            className="border my-3 flex justify-center flex-col items-center w-[100px] h-[100px] rounded-lg"
          >
            <img
              src={!image2 ? upload_icon : URL.createObjectURL(image2)}
              alt="upload icon"
            />
            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>
          <label
            htmlFor="image3"
            className="border my-3 flex justify-center flex-col items-center w-[100px] h-[100px] rounded-lg"
          >
            <img
              src={!image3 ? upload_icon : URL.createObjectURL(image3)}
              alt="upload icon"
            />
            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>
          <label
            htmlFor="image4"
            className="border my-3 flex justify-center flex-col items-center w-[100px] h-[100px] rounded-lg"
          >
            <img
              src={!image4 ? upload_icon : URL.createObjectURL(image4)}
              alt="upload icon"
            />
            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-[500x] px-3 py-2"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write Content Here"
          className="w-full max-w-[500x] px-3 py-2"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="">
          <p className="mb-3">Product Category</p>
          <select
            name=""
            id=""
            className="w-full px-3 py-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="">
          <p className="mb-3">Sub Category</p>
          <select
            name=""
            id=""
            className="w-full px-3 py-2"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwaer">Bottomwaer</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div className="">
          <p>Product Price</p>
          <input
            type="number"
            placeholder="25"
            className="w-full sm:W-[120px] py-2 px-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="">
        <p>Product Sizes</p>
        <div className="flex gap-3">
          <div
            className=""
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"],
              )
            }
          >
            <p
              className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>
          <div
            className=""
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"],
              )
            }
          >
            <p
              className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div
            className=""
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"],
              )
            }
          >
            <p
              className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div
            className=""
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
          <div
            className=""
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          name=""
          id="bestseller"
          value={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
}

export default AddProduct;
