import React, { useState } from "react";
import { Menu } from "antd";
import {
	PieChartOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import menuData from "./config";
import { Link, NavLink } from "react-router-dom";
import uuid from "react-uuid";

const { SubMenu } = Menu;

export const TopNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
	    setCollapsed(!collapsed);
    };

	return (

		<Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
			<div className="logo" />
			<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
				<Menu.Item key="1" icon={<PieChartOutlined />} >
					Option 1
				</Menu.Item>
				<Link to="/member/1">Catalog</Link>
				{menuData.map(({ children, icon, name }, index) => {
				  if (children.length > 0) {
				    return (
					    <SubMenu key={`sub${index}`} icon={icon} title={name}>
						  {children.map(({ name, path, exact }, index) => {
						    return (
							<Menu.Item key={`menu${index}`}>
								<Link key={uuid()} to={path}>
									{name}
								</Link>
							</Menu.Item>
						    );
						  })}
					    </SubMenu>
				    );
				  }
				  }
			        )}
			</Menu>
		</Sider>

	);
};

export default TopNavigation;
