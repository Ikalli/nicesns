import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';

import LoginForm from './loginform';
import UserProfile from './userprofile';

const mock = {
	nickname: 'MockNickName',
	Post: [],
	Followings: [],
	Followers: [],
	isLoggedin: false,
};

function Layout({ children }) {
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item key="home">
					<Link href="/" passHref>
						<a>NiceSNS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="profile">
					<Link href="/profile" passHref>
						<a>Profile</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="mail">
					<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{
						mock.isLoggedin ? <UserProfile/> : <LoginForm/>
					}
				</Col>
				<Col xs={24} md={12}>{children}</Col>
			</Row>
		</div>
	);
};

Layout.PropTypes = {
	children: PropTypes.node
}

export default Layout;