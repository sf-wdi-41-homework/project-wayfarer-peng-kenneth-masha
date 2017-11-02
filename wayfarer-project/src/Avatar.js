import React, { Component } from 'react';
import './Avatar.css';
import axios from 'axios';


class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    this.state.file
    console.log(this.state.file);
    axios({
        method: 'put',
        url: `http://localhost:3002/api/users/` + this.props.id,
        data: "",
       }).then(res => {
         console.log(res)
    }).catch(err => {
      console.log(err)
   })
  }



  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
      <form onSubmit={this._handleSubmit}>
        <div className="imgPreview" onSubmit={(e)=>this._handleSubmit(e)}>
          {$imagePreview}
          <input className="fileInput"
            type="file"
            name="avatar"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>

        </div>
      </form>
      </div>
    )
  }
}


export default Avatar;
