import React, { Fragment } from "react";
import { Form, Input, Button, Alert } from "antd";
import "../loginStyle.scss";
import { useLogin } from "api/login.api";
import Notification from "components/Notifications";

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

const Login = () => {
	const { login, data, error, loading } = useLogin();

	const onFinish = (values) => {
	 const { email, password } = values;

	  login({ variables: { email, password } }).then(({ data: { login } }) => {
	    if (login.status) {
	      location.href = "/member";
	    }
	  });
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Fragment>
			{error && <Notification message={error?.message} /> }

			<div className="login_wrapper">

				<Form
					{...layout}
					name="login_page"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="email"
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Fragment>
	);
};

export default Login;
