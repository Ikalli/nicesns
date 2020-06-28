import Link from 'next/link';
import { Menu, Input, Button } from 'antd';


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
			<Link href="/signup">
				<Button>SignUp</Button>
			</Link>
			{children}
		</div>
	);
};
export default Layout;