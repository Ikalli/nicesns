import { Form, Input, Button } from 'antd';

export default function NicknameEditForm() {
	return (
		<Form style={{ marginTop: '20px' }}>
			<Input style={{ marginBottom: '10px' }} addonBefore="Nickname" />
			<Button type="primary">Change</Button>
		</Form>
	);
}