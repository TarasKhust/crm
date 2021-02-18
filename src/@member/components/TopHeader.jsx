import React from "react";
import { Header } from "antd/es/layout/layout";
import AvatarHeader from "components/AvatarHeader";
import Sider from "antd/es/layout/Sider";

const TopHeader = () => {
	return (
		<div>
			<Header className="site-layout-background" style={{ padding: 0 }}>

				<AvatarHeader />

			</Header>

		</div>
	);
};

export default TopHeader;