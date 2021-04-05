import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "react-loader-spinner";

// components

export default function CardCategory({ color }) {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.sarafdesign.com/category")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
        setEmpty(true);
      });
    setLoading(false);
  }, [data]);

  console.log("ini hasil data " + data);

  let handleDelete = (e) => {
    if (window.confirm("Apakah anda yakin ingin menghapus?")) {
      setLoading(true);
      axios.delete(`https://api.sarafdesign.com/category/${e}`).then((res) => {
        console.log("inihasil delete " + res);

        alert.show("Category Successfully Deleted");
        // window.location.reload();

        // axios
        //   .get(`https://api.sarafdesign.com/images/gallery/${id}`)
        //   .then((res2) => {
        //     setData(res2.data);
        //     setTimeout(() => {
        //       alert("Kehapus");
        //       window.location.reload();
        //     }, 5000);
        //   });
      }, []);
      setLoading(false);
      // console.log(e, x);
    } else {
    }
    // e.preventDefault();
  };
  let i = 1;
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Category Works
              </h3>
              <Link to={`/admin/addcategory/`}>
                <button
                  className="bg-green-500 text-white  font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Add Category
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  No
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Category Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {empty ? (
                <div className="w-full justify-center items-center flex flex-col p-5">
                  data kosong
                </div>
              ) : (
                <>
                  {loading && (
                    <div>
                      <Loader
                        className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
                        type="Oval"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      />
                    </div>
                  )}
                  {!loading &&
                    data.map((x) => (
                      <tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {i++}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.category_nama}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                          <div className="flex">
                            <Link to={`/admin/editcategory/${x.id_category}`}>
                              <button
                                className="bg-yellow-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                Edit
                              </button>
                            </Link>
                            <button
                              className="bg-red-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => handleDelete(x.id_category)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardCategory.defaultProps = {
  color: "light",
};

CardCategory.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
