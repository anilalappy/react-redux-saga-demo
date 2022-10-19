import * as type from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.DELETE_USER_REQUESTED:
      return {
        ...state,
        loading: true,
        actionMessage: "",
      };
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users.filter((user:any) => user.id !== action.deletedId) ,
        actionMessage: {
          type:'success',
          message:"User deleted successfully."
      }
      };
    case type.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        actionMessage: {
            type:'error',
            message:"Ops, Something want wrong."
        },
      };
    case type.ADD_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
        actionMessage: {
            type:'success',
            message:"User added successfully."
        },
      };
    case type.ADD_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        actionMessage: {
            type:'success',
            message:"Ops, Something want wrong."
        },
      };
    case type.GET_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetail: action.userDetail,
      };
    case type.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        actionMessage: {
            type:'error',
            message:"Ops, Something want wrong."
        },
      };
      case type.UPDATE_USER_REQUESTED:
        return {
          ...state,
          loading: true,
        };
      case type.UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          actionMessage: {
            type:'success',
            message:"User updated successfully."
          },
        };
      case type.UPDATE_USER_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
          actionMessage: {
              type:'error',
              message:"Ops, Something want wrong."
          },
        };    
    default:
      return state;
  }
}
