export const initialState = {
	imagePaths: [],
	mainPosts: [{
		User: {
			id: 1,
			nickname: 'Ekalii',
		},
		content: 'First Card',
		img: 'https://avatars0.githubusercontent.com/u/16658067?s=460&u=09f9f385ffec1453896c9b079cc4fd503ee4cded&v=4'
	}],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
	type: ADD_POST,
};

export const addDummy = {
	type: ADD_DUMMY,
};

export default (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case ADD_POST:
			return {
				...state,
			};
		case ADD_DUMMY:
			return {
				...state,
			};
		default:
			return state;
	}
}