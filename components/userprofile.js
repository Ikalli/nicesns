import { Card, Avatar } from 'antd';

const mock = {
	nickname: 'MockNickName',
	Post: [],
	Followings: [],
	Followers: [],
	isLoggedIn: false
}

function UserProfile() {
	return(
		<>
			<Card actions={[
					<div key="twit">Twit<br />{mock.Post.length}</div>,
					<div key="following">Followings<br />{mock.Followings.length}</div>,
					<div key="follower">Followers<br />{mock.Followers.length}</div>
				]}
			>
				<Card.Meta
					avatar={<Avatar>{mock.nickname[0]}</Avatar>}
					title={mock.nickname}
				/>
			</Card>
		</>
	);
}

export default UserProfile;