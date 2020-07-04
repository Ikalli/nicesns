import propTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

export default function PostForm() {
	const dispatch = useDispatch();
	const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
	const [ text, setText ] = useState('');

	useEffect(() => {
		if (postAdded) {
			setText('');
		}
	}, [postAdded]);

	const onSubmitForm = useCallback(e => {
		e.preventDefault();
		dispatch({
			type: ADD_POST_REQUEST,
			data: {
				text,
			}
		});
	}, []);

	const onChangeText = useCallback(e => {
		setText(e.target.value);
	}, []);

	return(
		<>
			<Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
				<Input.TextArea maxLength={140} placeholder="How was your day?" value={text} onChange={onChangeText}/>
				<div>
					<input type="file" multiple hidden/>
					<Button>Upload Image</Button>
					<Button type="primary" htmlType="submit" loading={isAddingPost}>Write</Button>
				</div>
				<div>
					{
						imagePaths.map(v => {
							return(
								<div key={v}>
									<img src={`http://localhost:3000/${v}`} alt={v}/>
									<div>
										<Button>Remove</Button>
									</div>
								</div>
							)
						})
					}
				</div>
			</Form>
		</>
	);
}

PostForm.propTypes = {
	imagePaths: propTypes.array
};