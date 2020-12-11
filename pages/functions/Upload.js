import React, { Component } from "react";
import { ImageWithoutForm } from "./ImageWithoutForm";

export default class UploadFile extends Component {
  onImageLoad(e) {
    console.log("onImageLoad", e.target.files[0]);
    this.uploadForm(e.target.files[0]);
  }
  uploadForm(file) {
    const formData = new FormData();
    formData.append("image", file);
    const requestOptions = {
      method: "PUT",
      body: formData,
    };
    fetch("http://localhost:3001/upload", requestOptions)
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <ImageWithoutForm
          className="prova"
          onImageLoad={(e) => this.onImageLoad(e)}
        />

        <form id="upload_form" encType="multipart/form-data"></form>
      </div>
    );
  }
}
