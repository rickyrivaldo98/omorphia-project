import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";

const AddGalerry = () => {
  let history = useHistory();
  const alert = useAlert();

  const [Nama, SetNama] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [IdKategori, SetIdKategori] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange1 = (e) => SetNama(e.target.value);
  const handleChange2 = (e) => setDeskripsi(e.target.value);
  const handleChange3 = (e) => SetIdKategori(e.target.value);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.sarafdesign.com/category`).then((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);

  const handleGallery = (e) => {
    e.preventDefault();
    setLoading(true);
    const gallery = {
      nama: Nama,
      deskripsi: Deskripsi,
      id_category: IdKategori,
    };
    axios
      .post("https://api.sarafdesign.com/gallery", gallery)
      .then((res) => {
        alert.show("Gallery Successfully Added!");
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
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
                  Add Gallery
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleGallery}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Gallery Name
                      </label>
                      <input
                        onChange={handleChange1}
                        type="text"
                        name="gallery_name"
                        placeholder="insert image name...."
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
                        Description
                      </label>
                      <textarea
                        onChange={handleChange2}
                        type="text"
                        name="description"
                        placeholder="insert image name...."
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
                        Category Name
                      </label>
                      <select
                        onChange={handleChange3}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Not Selected</option>
                        {loading && <div>loading...</div>}
                        {!loading &&
                          data.map((x) => (
                            <option value={x.id_category}>
                              {x.category_nama}
                            </option>
                          ))}
                      </select>
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit"
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

export default AddGalerry;
