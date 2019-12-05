
import React from "react"
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import {xiugaiImg} from "../../actions/type/actionCreate";

const data = [{
    url: localStorage.getItem("user").urlPic,
    id: '2121',
}];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    //console.log(files, type, index);
    console.log(files[0]);
    console.log(JSON.parse(localStorage.getItem("user")))
    let userArr=JSON.parse(localStorage.getItem("user"))
    console.log(userArr.urlPic)
    userArr.urlPic=files;
    console.log(userArr)
    // localStorage.setItem("user",)
    // localStorage.getItem("user").urlPic=files;
    // xiugaiImg(files,JSON.parse(localStorage.getItem("user")));
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          multiple={this.state.multiple}
          length={1}
        />
      </WingBlank>
    );
  }
}
export default ImagePickerExample