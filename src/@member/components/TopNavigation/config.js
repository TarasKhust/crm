import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined,
} from "@ant-design/icons";

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
	"path": "member/catalog",
	"name": "catalog",
	"icon": <DesktopOutlined />,
	"children": [
	  {
		"path": "member/catalog/products",
		"name": "products",
		"exact": true,
	  },
	  {
		"path": "member/catalog/categories",
		"name": "categories",
		"exact": true,
	  },
	  {
		"path": "member/catalog/brands",
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
	"path": "member/buyers",
	"name": "buyers",
	"icon": <FileOutlined />,
	"children": [
	  {
		"path": "member/buyers/customer",
		"name": "customer",
		"exact": true,
	  },
	  {
		"path": "member/buyers/monitor",
		"name": "monitor",
		"exact": true,
	  },
	  {
		"path": "member/buyers/workplace",
		"name": "workplace",
		"exact": true,
	  },
	],
  },
];
