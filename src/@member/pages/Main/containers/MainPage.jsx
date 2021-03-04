import React from "react";
import TopNavigation from "components/TopNavigation/TopNavigation";
import TopHeader from "components/TopHeader";
import MainBody from "components/MainBody";
import Footer from "components/Footer";
import { Layout } from "antd";

const MainPage = () => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<TopNavigation />
			<Layout className="site-layout">
				<TopHeader />
				<MainBody />
				<Footer />
			</Layout>

		</Layout>
	);
};

export default MainPage;
