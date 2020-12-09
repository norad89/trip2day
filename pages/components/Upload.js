import React, {Component} from "react"
import {ImageWithoutForm} from "./ImageWithoutForm"

export default class UploadFile extends Component {
    onImageLoad(e){
        console.log('onImageLoad', e.target.files[0]);
        this.uploadForm(e.target.files[0]);
    }

    uploadForm(file){
        let form = new FormData(this.myForm);
        form.append('myImage', file);
        fetch('/upload', {
          method: 'POST',
          body: form
        }).then(res => console.log('res of fetch', res));
    }

  render() {
    return (
      <div>
        <h4>Upload Image</h4>
        <ImageWithoutForm onImageLoad={(e)=>this.onImageLoad(e)} />
        <form id="upload_form" ref="myForm"  encType="multipart/form-data">
        </form>
      </div>
    )
  }
}