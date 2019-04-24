import { User } from '../../models/user.model';

export interface IUserState {
  users: User[];
  selectedUser: User;
  error: string;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  error: null
};
