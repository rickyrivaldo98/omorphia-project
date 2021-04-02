import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddImages = () => {
  let { id } = useParams();
  let history = useHistory();
  const alert = useAlert();
  const [ImageName, setImageName] = useState();
  const [Image, setImage] = useState("");

  console.log(ImageName);
  console.log(Image);

  let save = (e) => {
    // e.preventDefault();
    let images = new FormData();
    images.set("id_gallery", id);
    images.set("images_nama", ImageName);
    images.set("file", Image);

    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${images._boundary}`,
      },
    };
    axios
      .post(`https://api.sarafdesign.com/images`, images, config)
      .then((res) => {
        console.log(res.data + "this is data after api call");
        alert.show("Images Successfully Added!");
        setTimeout(() => {
          history.push(`/admin/adminworksdetail/${id}`);
        }, 2000);
      })

      .catch((error) => {
        console.log(error);
        console.log(images);
      });
  };
  const handleImageName = (e) => setImageName(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  // validation form
  const schema = yup.object().shape({
    ImageName: yup.string().required(),
    picture: yup
      .mixed()
      .required("You need to provide a file")
      .test("fileSize", "The file is too large, max 6 mb", (value) => {
        return value && value[0].size <= 6000000;
      })
      .test("type", "We only support jpeg,jpg,gif, or png.", (value) => {
        return (
          value && value[0].type === "image/jpeg",
          "image/jpg",
          "image/gif",
          "image/png"
        );
      }),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
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
                  Add Images
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit((e) => save(e))}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Images Name
                      </label>
                      <input
                        onChange={handleImageName}
                        type="text"
                        placeholder="insert image name...."
                        name="ImageName"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        ref={register}
                      />
                      <p style={{ color: "red" }}>
                        {errors.ImageName?.message}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Image
                      </label>
                      <input
                        onChange={handleImage}
                        type="file"
                        name="picture"
                        placeholder="input file image"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        ref={register}
                      />
                      {errors.picture && (
                        <p style={{ color: "red" }}>{errors.picture.message}</p>
                      )}
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
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

export default AddImages;
