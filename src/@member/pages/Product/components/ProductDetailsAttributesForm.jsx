import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const ProductDetailsAttributesForm = () => {
  return (
	  <React.Fragment>
		<Form.List name="attributes">
			{(fields, { add, remove }) => (
				<React.Fragment>
					{fields.map(field => (
						<Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
							<Form.Item
								{...field}
								name={[field.name, "attributes"]}
								fieldKey={[field.fieldKey, "attributes"]}
								rules={[{ required: true, message: "Missing attributes name" }]}
							>
								<Input placeholder="Атрибут:" />
							</Form.Item>
							<Form.Item
								{...field}
								name={[field.name, "text"]}
								fieldKey={[field.fieldKey, "text"]}
								rules={[{ required: true, message: "Missing text name" }]}
							>
								<Input placeholder="Текст:" />
							</Form.Item>
							<MinusCircleOutlined onClick={() => remove(field.name)} />
						</Space>
				))}
					<Form.Item>
						<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
							Add field
						</Button>
					</Form.Item>
				</React.Fragment>
		  )}
		</Form.List>
	  </React.Fragment>
  );
};

export default ProductDetailsAttributesForm;
