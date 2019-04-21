import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  users: userReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
