import { useState, useCallback, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useInput } from '../components/loginform';

const TextInput = ({ value }) => (
	<div>{value}</div>
);

TextInput.propTypes = {
	value: propTypes.string,
}

export default function SignUp() {
	const dispatch = useDispatch();
	const { isSigningUp, me } = useSelector(state => state.user);

	const [ passChk, setPassChk ] = useState('');
	const [ term, setTerm ] = useState('');

	const [ passError, setPassError ] = useState(false);
	const [ termError, setTermError ] = useState(false);

	const [ id, onChangeId ] = useInput('');
	const [ pass, onChangePass ] = useInput('');
	const [ nick, onChangeNick ] = useInput('');

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

		return dispatch({
			type: SIGN_UP_REQUEST,
			data: {
				id,
				pass,
				nick
			}
		})
	}, [pass, passChk, term]);

	const onChangePassChk = useCallback(e => {
		setPassError(e.target.value !== pass);
		setPassChk(e.target.value);
	}, [pass]);

	const onChangeTerm = useCallback(e => {
		setTermError(false);
		setTerm(e.target.checked);
	}, []);

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
					<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
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