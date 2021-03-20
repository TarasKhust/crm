import React, { useState } from "react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => resolve(reader.result);
	reader.onerror = error => reject(error);
  });
}

export const ProductDetailsImages = () => {
  const state = {
	previewVisible: false,
	previewImage: "",
	previewTitle: "",
	fileList: [],
  };

  const [data, setData] = useState(state);

  const { previewVisible, previewImage, fileList, previewTitle } = data;

  const handleCancel = () => setData((prevState) => {
    return ({
	      ...prevState,
	      previewVisible: false,
	    }
    );
  });

  const beforeUpload = (file) => {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

	if (!isJpgOrPng) {
	  message.error("You can only upload JPG/PNG file!");
	}

	const isLt2M = file.size / 1024 / 1024 < 2;

	if (!isLt2M) {
	  message.error("Image must smaller than 2MB!");
	}

	return isJpgOrPng && isLt2M;
  };

  const handlePreview = async file => {
	if (!file.url && !file.preview) {
	  file.preview = await getBase64(file.originFileObj);
	}

	setData((prevState) => {
 return ({
   ...prevState,
	  previewImage: file.url || file.preview,
	  previewVisible: true,
	  previewTitle: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
	});
});
  };

  const handleChange = (response) => setData((prevState) => {
    console.log(response);
   return (
	   {
	     ...prevState,
	     fileList: response.fileList,
	   }
   );
  });

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<React.Fragment>
			<Upload
				listType="picture-card"
				accept="image/png, image/jpeg"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				beforeUpload={beforeUpload}
			>
				{fileList.length >= 5 ? null : uploadButton}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: "100%" }} src={previewImage} />
			</Modal>
		</React.Fragment>
	);
};

export default ProductDetailsImages;
