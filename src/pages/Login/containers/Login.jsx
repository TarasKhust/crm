import React, { Fragment, useContext } from "react";
import { Form, Input, Button, Alert } from "antd";
import "../loginStyle.scss";
import { useLogin } from "api/login.api";
import Notification from "components/Notifications";
import useLocalStorage from "hooks/useLocalStorage";
import { WebTokenApiContext } from "store/WebTokenApi";
import GQL from "Request/GQL";
import { CREATE_USER, LOGIN_MUTATION } from "api/schema/login.schema";

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
    const [token, setToken] = useLocalStorage("token", "");
    const [createUser, { data: datas }] = GQL.useMutation(CREATE_USER);

    const {
	  actions, selectors,
    } = useContext(WebTokenApiContext);

  console.log(selectors.getState());

	const onFinish = (values) => {
	 const { email, password } = values;

	  login({ variables: { email, password } }).then(({ data: { login: { status, token, id, email } } }) => {
	    if (status) {
	      setToken(token);
	      actions.setUser({ token, id, email });

	      // location.href = "/member";
	    }
	  });
	};

	const create = () => {
	  createUser({ variables: { email: "taraskhust@gmail.com", password: "12312312" } }).then(() => {

	  })
.catch(({ message }) => {
	    console.log(message);
	  });
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Fragment>
			{error && <Notification message={error?.message} /> }

			<Button onClick={create}>Click</Button>

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
