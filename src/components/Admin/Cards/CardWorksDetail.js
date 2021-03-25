import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// components

export default function CardWorksDetail({ color }) {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.sarafdesign.com/images/gallery/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        // console.log(data.slice(0, 1).map((x) => x.nama));
      });
    setLoading(false);
  }, []);

  let handleDelete = (e) => {
    // e.preventDefault();
    // console.log(e);
    setLoading(true);
    axios
      .delete(`https://api.sarafdesign.com/images/gallery/${id}/${e}`)
      .then((res) => {
        setTimeout(() => {
          alert("Kehapus");
          // window.location.reload();
        }, 2000);
      });
    setLoading(false);
  };
  // console.log(data.map((x) => x.id_images));
  // console.log(data[0].nama);
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
                Gallery {data.slice(0, 1).map((x) => x.nama)}
              </h3>
              <Link to={`/admin/addimages/${id}`}>
                <button
                  className="bg-green-500 text-white  font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
              {loading && <div>loading...</div>}
              {!loading &&
                data.map((x) => (
                  <>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                        1.
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                        {x.images_nama}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <img
                          src={`https://api.sarafdesign.com/${x.file}`}
                          // src="https://api.sarafdesign.com/uploads/haloo.jpeg"
                          alt=""
                        />
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                        <div className="flex">
                          <button
                            className="bg-yellow-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleDelete(x.id_images)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
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