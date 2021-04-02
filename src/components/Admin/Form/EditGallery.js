import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";

const EditGallery = () => {
  let { id } = useParams();
  let history = useHistory();

  const [GalleryName, setGalleryName] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(data);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.sarafdesign.com/gallery/${id}`).then((res) => {
      setData(res.data[0]);
      // console.log(data);
    });
    setLoading(false);
  }, []);

  let edit = (e) => {
    e.preventDefault();
    if (window.confirm("Apakah anda yakin ingin mengedit?")) {
      const gallery = {
        nama: GalleryName,
        deskripsi: Deskripsi,
      };
      axios
        .put(`https://api.sarafdesign.com/gallery/${id}`, gallery)
        .then((res) => {
          alert("Teredit");
          setTimeout(() => {
            history.push(`/admin/adminworks`);
          }, 2000);
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  const handleGalleryName = (e) => setGalleryName(e.target.value);
  const handleDeskripsi = (e) => setDeskripsi(e.target.value);

  console.log(GalleryName);
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
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Edit Gallery
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={(e) => edit(e)}>
                <div className="flex flex-col flex-wrap">
                  {loading && <div>loading...</div>}
                  {!loading && (
                    <>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Gallery Name
                          </label>
                          <input
                            // value={data.images_nama}
                            onChange={(e) => {
                              handleGalleryName(e);
                            }}
                            type="text"
                            placeholder={data.nama}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Deksripsi Gallery
                          </label>
                          <input
                            // value={data.images_nama}
                            onChange={(e) => {
                              handleDeskripsi(e);
                            }}
                            type="text"
                            placeholder={data.deskripsi}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <button
                          className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Edit
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGallery;
