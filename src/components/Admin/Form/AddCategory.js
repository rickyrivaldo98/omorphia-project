import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";

const AddCategory = () => {
  let history = useHistory();

  const [CategoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange1 = (e) => setCategoryName(e.target.value);
  console.log(CategoryName);

  const handleCategory = (e) => {
    e.preventDefault();
    setLoading(true);
    const category = {
      category_nama: CategoryName,
    };
    axios
      .post("https://api.sarafdesign.com/category", category)
      .then((res) => {
        console.log("Ini Hasil:");
        console.log(res);
        console.log("Berhasil Masuk");
        alert("Telah Dikirim ya");
        setTimeout(() => {
          //   history.push("/admin/admincategory");
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-10/12 mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-start">
                <button
                  className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Back
                </button>
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Category
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleCategory}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="category_name"
                        placeholder="insert category name...."
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange1}
                      />
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;