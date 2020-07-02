import propTypes from 'prop-types';
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

PostCard.propTypes = {
	post: propTypes.shape({
		User: propTypes.object,
		content: propTypes.string,
		img: propTypes.string,
		createAt: propTypes.object,
	})
};