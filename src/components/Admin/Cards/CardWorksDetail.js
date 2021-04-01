import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

// components

export default function CardWorksDetail({ color }) {
  let history = useHistory();
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.sarafdesign.com/images/gallery/${id}`)
      .then((res) => {
        setData(res.data);
      });
    setLoading(false);
  }, []);

  let handleDelete = (e, x) => {
    setLoading(true);
    axios
      .delete(`https://api.sarafdesign.com/images/gallery/${x}/${e}`)
      .then((res) => {
        axios
          .get(`https://api.sarafdesign.com/images/gallery/${id}`)
          .then((res2) => {
            setData(res2.data);
            setTimeout(() => {
              alert("Kehapus");
              window.location.reload();
            }, 5000);
          });
      });
    setLoading(false);
    // console.log(e, x);
  };
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
              <div className="text-center items-center flex justify-start">
                <button
                  className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Back
                </button>
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  Gallery {data.slice(0, 1).map((x) => x.nama)}
                </h3>
              </div>

              <Link to={`/admin/addimages/${id}`}>
                <button
                  className="float-right bg-green-500 text-white  font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Add Image
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
                  Image Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Image
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
              {data.length < 1 ? (
                <div>
                  <Loader
                    className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
                    type="Oval"
                    color="#00BFFF"
                    height={80}
                    width={80}
                  />
                </div>
              ) : (
                <>
                  {loading && <div>loading...</div>}
                  {!loading &&
                    data.map((x) => (
                      <>
                        <tr>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                            {x.id_images}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                            {x.images_nama}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <img
                              className="w-32"
                              src={`https://api.sarafdesign.com/${x.file}`}
                              alt=""
                            />
                          </td>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                            <div className="flex">
                              <Link to={`/admin/editimages/${x.id_images}`}>
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
                                onClick={() =>
                                  handleDelete(x.id_images, x.images_nama)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
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

CardWorksDetail.defaultProps = {
  color: "light",
};

CardWorksDetail.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
