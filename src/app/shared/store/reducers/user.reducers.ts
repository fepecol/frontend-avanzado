import { EUserActions, UserActions } from './../actions/user.actions';
//import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetAccessError: {
      return {
        ...state,
        error: 'Usuario o contraseña incorrectos'
      };
    }

    case EUserActions.GetAccessSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
        error: null
      };
    }

    default:
      return state;
  }
};
