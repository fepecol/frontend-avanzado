import { User } from '../../models/user.model';
import { Offer } from '../../models/offer.model';

export interface IUserState {
  users: User[];
  selectedUser: User;
  error: string;
  offers: Offer[];
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  error: null,
  offers: null
};
