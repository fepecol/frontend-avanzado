import { EUserActions, UserActions } from './../actions/user.actions';
//import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';
import { offers } from '../selectors/user.selector';

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

    case EUserActions.ModifyAccountSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
        error: null
      };
    }
    
    case EUserActions.GetOffersSuccess: {
      return {
        ...state,
        offers: action.payload
      };
    }

    default:
      return state;
  }
};
