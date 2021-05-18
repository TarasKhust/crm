import React from "react";
import { Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Item, List } from "components/FormElements/Form";
import Input from "components/FormElements/Input";

const ProductDetailsAttributesForm = () => {
  return (
	  <React.Fragment>
		<List name="attribute" style={ { width: "100%" }}>
			{(fields, { add, remove }) => (
				<React.Fragment>
					{fields.map(field => (
						<Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
							<Item
								{...field}
								name={[field.name, "attributes"]}
								fieldKey={[field.fieldKey, "attributes"]}
								rules={[{ required: true, message: "Missing attributes name" }]}
								style={ { width: "100%" }}
							>
								<Input placeholder="Атрибут:" style={ { width: "100%" }} />
							</Item>
							<Item
								{...field}
								name={[field.name, "text"]}
								fieldKey={[field.fieldKey, "text"]}
								rules={[{ required: true, message: "Missing text name" }]}
							>
								<Input placeholder="Текст:" style={ { width: "100%" }} />
							</Item>
							<MinusCircleOutlined onClick={() => remove(field.name)} />
						</Space>
				))}
					<Item>
						<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
							Add field
						</Button>
					</Item>
				</React.Fragment>
		  )}
		</List>
	  </React.Fragment>
  );
};

export default ProductDetailsAttributesForm;
