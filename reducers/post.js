export const initialState = {
	mainPosts: [{
		id: 1,
		User: {
			id: 1,
			nickname: 'Ekalii',
		},
		content: 'First Card',
		img: 'https://avatars0.githubusercontent.com/u/16658067?s=460&u=09f9f385ffec1453896c9b079cc4fd503ee4cded&v=4',
		comments: [],
	}],
	imagePaths: [],
	addPostErrorReason: '',
	isAddingPost: false,
	postAdded: false,
	isAddingComment: false,
	addCommentErrorReason: '',
	commentAdded: false,
};

const dummyPost = {
	id: 2,
	User: {
		id: 1,
		nickname: 'mockuser',
	},
	content: 'Dummy Post',
	comments: [],
}

const dummyComment = {
	id: 1,
	User: {
		id: 1,
		nickname: 'MockUserComment'
	},
	createdAt: new Date(),
	content: 'Dummy Comment',
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPostRequest = data => ({
	type: ADD_POST_REQUEST,
	payload: {
		addPostData: data,
	}
});

export const addCommentRequest = data => ({
	type: ADD_COMMENT_REQUEST,
	payload: {
		addCommentData: data,
	},
});

export default (state = initialState, action) => {
	const { type, payload, error } = action;
	switch (type) {
		case ADD_POST_REQUEST:
			return {
				...state,
				isAddingPost: true,
				postAdded: false,
				addPostErrorReason: '',
			};
		case ADD_POST_SUCCESS:
			return {
				...state,
				isAddingPost: false,
				postAdded: true,
				mainPosts: [dummyPost, ...state.mainPosts],
			};
		case ADD_POST_FAILURE:
			return {
				...state,
				isAddingPost: false,
				addPostErrorReason: error,
			};
		case ADD_COMMENT_REQUEST:
			return {
				...state,
				isAddingComment: true,
				commentAdded: false,
				addCommentErrorReason: '',
			};
		case ADD_COMMENT_SUCCESS:
			const postIndex = state.mainPosts.findIndex(v => v.id === payload.postId);
			const post = state.mainPosts[postIndex];
			const comments = [...post.comments, dummyComment];
			const mainPosts = [...state.mainPosts];
			mainPosts[postIndex] = { ...post, comments };

			return {
				...state,
				isAddingComment: false,
				commentAdded: true,
				mainPosts
			};
		case ADD_COMMENT_FAILURE:
			return {
				...state,
				isAddingComment: false,
				addCommentErrorReason: error,
			};
		default:
			return state;
	}
}