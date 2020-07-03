const mockUser = {
	nickname: 'Ekalii',
	Post: [],
	Followings: [],
	Followers: [],
}

export const initialState = {
	isLoggedIn: false,
	isLogginOut: false,
	isLogginIn: false,
	logInErrorReason: '',
	isSignedUp: false,
	isSigningUp: false,
	signUpErrorReason: '',
	me: null,
	followingList: [],
	followerList: [],
	userInfo: null
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const signupRequestAction = data => {
	return {
		type: SIGN_UP_REQUEST,
		payload: {
			signUpData: data
		}
	}
};

export const loginRequestAction = data => {
	return{
		type: LOG_IN_REQUEST,
		payload: {
			loginData: data
		}
	}
};

export const logoutRequestAction = () => {
	return{
		type: LOG_OUT_REQUEST
	}
};

export default (state = initialState, action) => {
	const { type, payload, error } = action;

	switch(type){
		case SIGN_UP_REQUEST:
			return {
				...state,
				isSigningUp: true,
				isSignedUp: false,
				signUpErrorReason: ''
			};
		case SIGN_UP_SUCCESS:
			return {
				...state,
				isSigningUp: false,
				isSignedUp: true,
			};
		case SIGN_UP_FAILURE:
			return {
				...state,
				isSigningUp: false,
				signUpErrorReason: error
			};
		case LOG_IN_REQUEST:
			return {
				...state,
				isLogginIn: true,
				logInErrorReason: '',
			};
		case LOG_IN_SUCCESS:
			return {
				...state,
				isLogginIn: false,
				isLoggedIn: true,
				me: mockUser,
				isLoading: false
			};
		case LOG_IN_FAILURE:
			return {
				...state,
				isLoggedIn: false,
				isLogginIn: false,
				logInErrorReason: error,
				me: null,
			}
		case LOG_OUT_REQUEST:
			return {
				...state,
				isLogginOut: true,
			};
		case LOG_OUT_SUCCESS:
			return {
				...state,
				isLogginIn: false,
				isLogginOut: false,
				me: {},
			};
		case LOG_OUT_FAILURE:
			return {
				...state,
				isLogginOut: false,
			}
		default:
			return state;
	}
};