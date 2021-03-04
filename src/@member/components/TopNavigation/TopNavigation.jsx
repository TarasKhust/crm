import React, { useState } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import menuData from "../../config/config";
import { Link } from "react-router-dom";
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
				{menuData.map(({ children, icon, name, path }, index) => {
					  if (children?.length > 0) {
						return (
							<SubMenu key={`sub${index}`} icon={icon} title={name}>
								{children.map(({ name, path, icon }, index) => {
								return (
									<Menu.Item key={`menu${index}`} icon={icon}>
										<Link key={uuid()} to={path}>
											{name}
										</Link>
									</Menu.Item>
								);
							  })}
							</SubMenu>
						);
					  }

						return (
							<Menu.Item key={`${index}`} icon={icon} title={name}>
								<Link key={uuid()} to={path}>
									{name}
								</Link>
							</Menu.Item>
						);
					}
			        )}
			</Menu>
		</Sider>

	);
};

export default TopNavigation;
