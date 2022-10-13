import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/services";
import { User } from "../types";

function getUsersData() {
  return getRequest("users");
}
function getUser(payload: any) {
  return getRequest(`users/${payload.id}`);
}

function* fetchUsers(): any {
  try {
    const users = yield call(getUsersData);
    yield put({ type: "GET_USERS_SUCCESS", users });
  } catch (e: any) {
    yield put({ type: "GET_USERS_FAILED", message: e?.message });
  }
}

function* getUserDetail(payload: any): any {
  try {
    const user = yield call(getUser, { id: payload.id });
    yield put({ type: "GET_USER_SUCCESS", userDetail: user });
  } catch (e: any) {
    yield put({ type: "GET_USER_FAILED", message: e?.message });
  }
}

function* deleteUser(payload: any) {
  try {
    const users: User[] = payload.users;
    yield all([
      call<any>(deleteRequest, { endPoint: "users", id: payload?.user?.id }),
    ]);
    yield put({
      type: "DELETE_USER_SUCCESS",
      users: users,
      deletedId: payload?.user?.id,
    });
  } catch (e: any) {
    yield put({ type: "DELETE_USER_FAILED", message: e?.message });
  }
}

function* addUser(payload: any) {
  try {
    yield call<any>(postRequest, { endPoint: "users", user: payload?.user });
    yield put({ type: "ADD_USER_SUCCESS" });
    yield put({
      type: "GET_USERS_SUCCESS",
      users: [...payload?.users, payload?.user],
    });
  } catch (e: any) {
    yield put({ type: "ADD_USER_FAILED", message: e?.message });
  }
  // yield fetchUsers();
}

function* updateUser(payload: any) {
  try {
    yield call<any>(putRequest, {
      endPoint: "users",
      param: JSON.stringify(payload?.user),
    });
    yield put({ type: "UPDATE_USER_SUCCESS" });
  } catch (e: any) {
    yield put({ type: "UPDATE_USER_FAILED", message: e?.message });
  }
  yield fetchUsers();
}

function* userSaga() {
  yield takeLatest("GET_USERS_REQUESTED", fetchUsers);
  yield takeLatest<any>("DELETE_USER_REQUESTED", deleteUser);
  yield takeLatest<any>("ADD_USER_REQUESTED", addUser);
  yield takeLatest<any>("GET_USER_REQUESTED", getUserDetail);
  yield takeLatest<any>("UPDATE_USER_REQUESTED", updateUser);
}

export default userSaga;
