import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import * as acions from '../reducers/user';

function loginApi() {
	return axios.post('/login');
}

function* login({ payload }) {
	try {
		const { loginData } = payload;
		console.log("Login data: ", loginData);
		yield delay(2000);
		yield put({
			type: actions.LOG_IN_SUCCESS,
		});
	} catch(err) {
		console.error('Login error: ', err);
		yield put({
			type: actions.LOG_IN_FAILURE,
			err
		});
	}
}

function logoutApi() {
	return axios.post('./logout');
}

function* logout() {
	try {
		yield delay(2000);
		yield put({
			type: actions.LOG_OUT_SUCCESS
		})
	} catch(err) {
		console.error('Logout error:', err);
		yield put({
			type: actions.LOG_OUT_FAILURE,
			err
		});
	}
}

function signUpApi() {
	return axios.post('/signup');
}

function* signUp({ payload }) {
	try {
		const { signUpData } = payload;
		console.log('Sign Up Data: ', signUpData);
		yield delay(2000);
		yield put({
			type: actions.SIGN_UP_SUCCESS
		});
	} catch(err) {
		console.error('Sign Up Error: ', err);
		yield put({
			type: actions.SIGN_UP_FAILURE,
			err
		});
	}
}

function* watchLogin() {
	yield takeEvery(actions.LOG_IN_REQUEST, login);
	yield takeEvery(actions.LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
	yield takeEvery(actions.SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
	yield all([
		fork(watchLogin),
		fork(watchSignUp),
	]);
}