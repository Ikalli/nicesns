import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { loginAction } from '../reducers/user';

export const useInput = (initialValue = null) => {
	const [value, setter] = useState(initialValue);
	const handler = useCallback(e => {
		setter(e.target.value);
	}, []);
	return [value, handler];
}

function LoginForm() {
	const dispatch = useDispatch();

	const [id, onChangeId] = useInput('');
	const [pass, onChangePass] = useInput('');

	const onSubmitForm = useCallback(e => {
		e.preventDefault();
		dispatch(loginAction({
			id,
			pass
		}));
	}, [id, pass]);

	return(
		<div>
			<Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
				<div>
					<label htmlFor="user-id">ID</label>
					<br />
					<Input name="user-id" required value={id} onChange={onChangeId}/>
				</div>
				<div>
					<label htmlFor="user-pass">Password</label>
					<br />
					<Input name="user-pass" required value={pass} onChange={onChangePass}/>
				</div>
				<div style={{ marginTop: '10px' }}>
					<Button type="primary" htmlType="submit" loading={false}>LogIn</Button>
					<Link href="/signup" passHref>
						<a><Button>SignUp</Button></a>
					</Link>
				</div>
			</Form>
		</div>
	);
}

export default LoginForm;