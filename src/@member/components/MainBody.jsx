import React from "react";
import { Content } from "antd/es/layout/layout";
import { Breadcrumb } from "antd";

const MainBody = () => {
	return (
		<div>
			<Content style={{ margin: "0 16px" }}>
				<Breadcrumb style={{ margin: "16px 0" }}>
					<Breadcrumb.Item>User</Breadcrumb.Item>
					<Breadcrumb.Item>Bill</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
					Bill is a cat.
				</div>
			</Content>

		</div>
	);
};

export default MainBody;
