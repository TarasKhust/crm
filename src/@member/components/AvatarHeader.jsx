import PropTypes from "prop-types";
import React from "react";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AvatarHeader = ({ count }) => {
	return (
		<React.Fragment>
			<span className="avatar-item">
				<Badge count={count}>
					<Avatar shape="square" icon={<UserOutlined />} />
				</Badge>
			</span>
		</React.Fragment>
	);
};

export default AvatarHeader;

AvatarHeader.propTypes = {
  count: PropTypes.number,
};

AvatarHeader.defaultProps = {
  count: 1,
};
