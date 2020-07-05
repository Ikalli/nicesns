import { Form, Input, Button } from 'antd';

export default function NicknameEditForm() {
	return (
		<Form style={{ marginTop: '20px', borderBottom: '1px solid #d9d9d9' }}>
			<Input style={{ marginBottom: '10px' }} addonBefore="Nickname" />
			<Button type="primary" style={{ marginBottom: '5px' }}>Change</Button>
		</Form>
	);
}