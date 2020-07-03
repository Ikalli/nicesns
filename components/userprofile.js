import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { useCallback } from 'react';

function UserProfile() {
	const dispatch = useDispatch();
	const { me, isLoggingOut } = useSelector(state => state.user);

	const onLogout = useCallback(() => {
		dispatch(logoutRequestAction());
	}, []);

	return(
		<>
			<Card actions={[
					<div key="twit">Twit<br />{me.Post.length}</div>,
					<div key="following">Followings<br />{me.Followings.length}</div>,
					<div key="follower">Followers<br />{me.Followers.length}</div>
				]}
			>
				<Card.Meta
					avatar={<Avatar>{me.nickname[0]}</Avatar>}
					title={me.nickname}
				/>
				<Button onClick={onLogout} loading={isLoggingOut}>LogOut</Button>
			</Card>
		</>
	);
}

export default UserProfile;