import { List, Card, Button} from 'antd';
import { StopOutlined } from '@ant-design/icons';

import NicknameEditForm from '../components/nicknameeditform';

export default function Profile() {
	return(
		<>
			<NicknameEditForm/>
			<List
				style={{ marginTop: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size="small"
				header={<div>Following</div>}
				dataSource={['Following_1', 'Following_2', 'Following_3']}
				loadMore={<Button style={{ width: '100%' }}>LoadMore</Button>}
				bordered
				renderItem={item => {
					return(
						<List.Item style={{ marginTop: '20px' }}>
							<Card actions={[<StopOutlined />]}>
								<Card.Meta description={item}/>
							</Card>
						</List.Item>
					);
				}}
			/>
			<List
				style={{ marginTop: '20px' }}
				grid={{ gutter: 4, xs: 2, md: 3 }}
				size="small"
				header={<div>Follower</div>}
				dataSource={['Follower_1', 'Follower_2', 'Follower_3']}
				loadMore={<Button style={{ width: '100%' }}>LoadMore</Button>}
				bordered
				renderItem={item => {
					return(
						<List.Item style={{ marginTop: '20px' }}>
							<Card actions={[<StopOutlined />]}>
								<Card.Meta description={item}/>
							</Card>
						</List.Item>
					);
				}}
			/>
		</>
	);
}