import { EUserActions, UserActions } from './../actions/user.actions';
//import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    /*case EUserActions.GetAccessSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }*/

    default:
      return state;
  }
};
