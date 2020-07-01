import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';
import { useCallback } from 'react';

function UserProfile() {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);

	const onLogout = useCallback(() => {
		dispatch(logoutAction());
	}, []);

	return(
		<>
			<Card actions={[
					<div key="twit">Twit<br />{user.Post.length}</div>,
					<div key="following">Followings<br />{user.Followings.length}</div>,
					<div key="follower">Followers<br />{user.Followers.length}</div>
				]}
			>
				<Card.Meta
					avatar={<Avatar>{user.nickname[0]}</Avatar>}
					title={user.nickname}
				/>
				<Button onClick={onLogout}>LogOut</Button>
			</Card>
		</>
	);
}

export default UserProfile;