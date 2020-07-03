import { useState, useCallback, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { signupRequestAction } from '../reducers/user';

import { useInput } from '../components/loginform';

export default function SignUp() {
	const dispatch = useDispatch();
	const { isSignedUp, me } = useSelector(state => state.user);

	const [ id, onChangeId ] = useState('');
	const [ nick, onChangeNick ] = useState('');

	const [ pass, setPass ] = useState('');
	const [ passChk, setPassChk ] = useState('');
	const [ term, setTerm ] = useState('');

	const [ passError, setPassError ] = useState(false);
	const [ termError, setTermError ] = useState(false);

	useEffect(() => {
		if (me) {
			alert('Move to mainpage');
			Router.push('/');
		}
	}, [me && me.id])

	const onSubmit = useCallback(e => {
		e.preventDefault();

		if (pass !== passChk) {
			return setPassError(true);
		};

		if (!term) {
			return setTermError(true);
		};

		return dispatch(signupRequestAction({
			id,
			pass,
			nick
		}))
	}, [pass, passChk, term]);

	const onChangePass = useCallback(e => {
		setPass(e.target.value);
	}, []);

	const onChangePassChk = useCallback(e => {
		setPassError(e.target.value !== pass);
		setPassChk(e.target.value);
	}, []);

	const onChangeTerm = e => {
		setTermError(false);
		setTerm(e.target.checked);
	}

	const [ id, onChangeId ] = useInput('');
	const [ nick, onChangeNick ] = useInput('');

	return (
		<>
			<Form onSubmit={onSubmit} style={{ padding: 10 }}>
				<div>
					<label htmlFor="user-id">ID</label>
					<br />
					<Input name="user-id" required value={id} onChange={onChangeId} />
				</div>
				<div>
					<label htmlFor="user-nick">NickName</label>
					<br />
					<Input name="user-nick" required value={nick} onChange={onChangeNick} />
				</div>
				<div>
					<label htmlFor="user-pass">Password</label>
					<br />
					<Input name="user-pass" required value={pass} onChange={onChangePass} />
				</div>
				<div>
					<label htmlFor="user-pass-chk">Password Check</label>
					<br />
					<Input name="user-pass-chk" required value={passChk} onChange={onChangePassChk} />
					{passError && <div style={{ color: 'red' }}>Please check password</div>}
				</div>
				<div>
					<Checkbox name="user-term" value={term} onChange={onChangeTerm}>
						Are you agree this term?
					</Checkbox>
					{termError && <div style={{ color: 'red' }}>You must agree term</div>}
				</div>
				<div>
					<Button type="primary" htmlType="submit">Register</Button>
				</div>
			</Form>
		</>
	);
}