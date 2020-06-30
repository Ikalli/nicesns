import PropTypes from 'prop-types';
import { Card, Avatar, Button } from 'antd';
import { 
	RetweetOutlined, 
	HeartOutlined, 
	MessageOutlined, 
	EllipsisOutlined 
} from '@ant-design/icons';

export default function PostCard({ post }) {
	return(
		<>
			<Card
				cover={post.img && <img alt="example" src={post.img} />}
				actions={[
					<RetweetOutlined/>,
					<HeartOutlined/>,
					<MessageOutlined/>,
					<EllipsisOutlined/>,
				]}
				extra={<Button>Follow</Button>}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={post.content}
				/>
			</Card>
		</>
	);
}

PostCard.PropTypes = {
	post: PropTypes.shape({
		User: PropTypes.object,
		content: PropTypes.string,
		img: PropTypes.string,
		createAt: PropTypes.object,
	})
};