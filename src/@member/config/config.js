import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined, UserOutlined, TeamOutlined,
} from "@ant-design/icons";
import routes from "@member/config/routes";

export default [
  {
	"path": "member",
	"name": "dashboard",
	"icon": <PieChartOutlined />,
	"children": [
	  {
		"path": "member/dashboard/analysis",
		"name": "analysis",
		"exact": true,
	  },
	  {
		"path": "member/dashboard/monitor",
		"name": "monitor",
		"exact": true,
	  },
	  {
		"path": "member/dashboard/workplace",
		"name": "workplace",
		"exact": true,
	  },
	],
  },
  {
	"path": routes.members.catalog._,
	"name": "catalog",
	"icon": <DesktopOutlined />,
	"children": [
	  {
		"path": routes.members.catalog.products._,
		"name": "products",
		"exact": true,
	  },
	  {
		"path": routes.members.catalog.categories._,
		"name": "categories",
		"exact": true,
	  },
	  {
		"path": routes.members.catalog.brands._,
		"name": "brands",
		"exact": true,
	  },
	],
  },
  {
	"path": "member/extensions",
	"name": "extensions",
	"icon": <UserOutlined />,
	"children": [
	  {
		"path": "member/dashboard/analysis",
		"name": "analysis",
		"exact": true,
	  },
	  {
		"path": "member/dashboard/monitor",
		"name": "monitor",
		"exact": true,
	  },
	  {
		"path": "member/dashboard/workplace",
		"name": "workplace",
		"exact": true,
	  },
	],
  },
  {
	"path": "member/sales",
	"name": "sales",
	"icon": <TeamOutlined />,
	"children": [
	  {
		"path": "member/sales/orders",
		"name": "orders",
	    "icon": <TeamOutlined />,
		"exact": true,
	  },
	  {
		"path": "member/dashboard/monitor",
		"name": "monitor",
		"exact": true,
	  },
	  {
		"path": "member/dashboard/workplace",
		"name": "workplace",
		"exact": true,
	  },
	],
  },
  {
	"path": "member/1",
	"name": "ola",
	"icon": <TeamOutlined />,
    "children": [],
  },
];
