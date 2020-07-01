import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import LoginForm from './loginform';
import UserProfile from './userprofile';

function Layout({ children }) {
	const { isLoggedin } = useSelector(state => state.user);

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
						isLoggedin ? <UserProfile/> : <LoginForm/>
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