import React, { Component } from "react";
import { ImageWithoutForm } from "./ImageWithoutForm";
export default class UploadFile extends Component {
  onImageLoad(e) {
    console.log("onImageLoad", e.target.files[0]);
    this.uploadForm(e.target.files[0]);
  }
  uploadForm(file) {
    const formData = FormData();
    formData.append("image", file);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:3001/upload", requestOptions)
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <h4>Upload Image</h4>
        <ImageWithoutForm onImageLoad={(e) => this.onImageLoad(e)} />
        <form id="upload_form" ref="form" encType="multipart/form-data"></form>
        {this.getImage()}
      </div>
    );
  }
}
