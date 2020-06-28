import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Form, Input, Checkbox, Button } from 'antd';

export default function SignUp() {
	const [ pass, setPass ] = useState('');
	const [ passChk, setPassChk ] = useState('');
	const [ term, setTerm ] = useState('');

	const [ passError, setPassError ] = useState(false);
	const [ termError, setTermError ] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		if (pass !== passChk) {
			return setPassError(true);
		};

		if (!term) {
			return setTermError(true);
		};

		console.log({
			id, nick, pass, passChk, term
		});
	};

	const onChangePass = e => {
		setPass(e.target.value);
	};

	const onChangePassChk = e => {
		setPassError(e.target.value !== pass);
		setPassChk(e.target.value);
	};

	const onChangeTerm = e => {
		setTermError(false);
		setTerm(e.target.checked);
	}

	const useInput = (initialValue = null) => {
		const [ value, setter ] = useState(initialValue);
		const handler = e => {
			setter(e.target.value);
		};
		return [value, handler];
	};

	const [ id, onChangeId ] = useInput('');
	const [ nick, onChangeNick ] = useInput('');

	return (
		<>
			<Head>
				<title>NiceSNS</title>
				<link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
			</Head>
			<Layout>
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
			</Layout>
		</>
	);
}